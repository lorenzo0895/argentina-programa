import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { MatButtonModule } from '@angular/material/button';
import { LandingComponent } from './landing/landing.component';
import { CardComponent } from './card/card.component';
import { SkillComponent } from './skill/skill.component';
import { SkillItemComponent } from './skill/skill-item/skill-item.component';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { RoundButtonComponent } from './round-button/round-button.component';

import { SkeletonModule } from 'primeng/skeleton';
import { ConfirmComponent } from './confirm/confirm.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { CardContentComponent } from './card/card-content/card-content.component';

@NgModule({
  declarations: [
    NavComponent,
    LandingComponent,
    CardComponent,
    SkillComponent,
    SkillItemComponent,
    RoundButtonComponent,
    ConfirmComponent,
    CardContentComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    RouterModule,
    SkeletonModule,
    MatDialogModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  exports: [NavComponent, LandingComponent, CardComponent, SkillComponent, CardContentComponent],
})
export class ComponentsModule {}
