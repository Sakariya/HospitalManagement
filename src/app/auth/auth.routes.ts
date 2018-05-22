import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataComponent } from '../auth/data/data.component';
import { DataSingleUserComponent } from '../auth/data-single-user/data-single-user.component';
import { SingleDataResolver } from '../shared/SingleDataResolver';
export const authRoots: Routes = [
    {
        path: ':id',
        component: DataSingleUserComponent,
        resolve: { message: SingleDataResolver }
    }
];
