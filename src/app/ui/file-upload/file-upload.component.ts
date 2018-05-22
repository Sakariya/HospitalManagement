import { Component, OnInit, Input, Output, EventEmitter, HostListener, ViewChild, ElementRef } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
    selector: 'app-file-upload',
    templateUrl: './file-upload.component.html',
    styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {

    constructor(private domSanitizer: DomSanitizer) { }

    @ViewChild('fileInput') fileInput: ElementRef;
    errors: Array<string> = [];
    base64Image;
    isFileselected = false;
    dragAreaClass = 'dragarea';
    @Input() fileExt = 'JPG, GIF, PNG';
    @Input() maxFiles = 5;
    @Input() maxSize = 5; // 5MB
    @Output() uploadStatus = new EventEmitter();
    @Output() fileSelected = new EventEmitter();

    ngOnInit() {
    }

    @HostListener('drop', ['$event']) onDrop(event) {
        this.errors = [];
        this.dragAreaClass = 'dragarea';
        event.preventDefault();
        event.stopPropagation();
        if (this.isValidFiles(event.dataTransfer.files)) {
            this.readThis(event.dataTransfer.files[0]);
            this.isFileselected = true;
            this.fileSelected.emit(event.dataTransfer.files[0]);
        }
    }

    readThis(inputValue: any): void {
        const file: File = inputValue;
        const myReader: FileReader = new FileReader();
        myReader.onloadend = (e) => {
            this.base64Image = myReader.result;
        };
        myReader.readAsDataURL(file);
    }

    @HostListener('dragover', ['$event']) onDragOver(event) {
        this.dragAreaClass = 'droparea';
        event.preventDefault();
    }

    @HostListener('dragenter', ['$event']) onDragEnter(event) {
        this.dragAreaClass = 'droparea';
        event.preventDefault();
    }

    @HostListener('dragend', ['$event']) onDragEnd(event) {
        this.dragAreaClass = 'dragarea';
        event.preventDefault();
    }

    @HostListener('dragleave', ['$event']) onDragLeave(event) {
        this.dragAreaClass = 'dragarea';
        event.preventDefault();
    }
    showFilelected(fileInput: any) {
        if (fileInput.target.files && fileInput.target.files[0]) {
            if (this.isValidFiles(fileInput.target.files)) {
                this.readThis(fileInput.target.files[0]);
                this.isFileselected = true;
                this.fileSelected.emit(fileInput.target.files[0]);
            }
        }
    }

    removeSelected() {
        this.isFileselected = false;
        this.fileSelected.emit();
    }

    browseFile() {
        const el: HTMLElement = this.fileInput.nativeElement as HTMLElement;
        el.click();
    }

    private isValidFiles(files) {
        // Check Number of files
        if (files.length > this.maxFiles) {
            this.errors.push('At a time you can upload only ' + this.maxFiles + ' files');
        }
        this.isValidFileExtension(files);
        return this.errors.length === 0;
    }

    private isValidFileExtension(files) {
        // Make array of file extensions
        const extensions = (this.fileExt.split(','))
            .map(function (x) { return x.toLocaleUpperCase().trim(); });

        for (let i = 0; i < files.length; i++) {
            // Get file extension
            const ext = files[i].name.toUpperCase().split('.').pop() || files[i].name;
            // Check the extension exists

            const exists = extensions.includes(ext);
            if (!exists) {
                this.errors.push('Upload valid profile image JPG, GIF, PNG');
            }
            // Check file size
            this.isValidFileSize(files[i]);
        }
    }

    private isValidFileSize(file) {
        const fileSizeinMB = file.size / (1024 * 1000);
        const size = Math.round(fileSizeinMB * 100) / 100; // convert upto 2 decimal place
        if (size > this.maxSize) {
            this.errors.push('Profile image size should less then ' + this.maxSize);
        }
    }
}