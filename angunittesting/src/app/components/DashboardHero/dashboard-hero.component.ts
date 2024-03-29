import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Hero } from "../../model/hero";
import { CommonModule } from "@angular/common";


@Component({
    selector:    'dashboard-hero',
    standalone: true,
    imports:[CommonModule],
    templateUrl: './dashboard-hero.component.html',
    styleUrls: [ './dashboard-hero.component.css' ]
  })
export class DashboardHeroComponent {
    @Input() hero!: Hero;
    @Output() selected = new EventEmitter<Hero>();
    click() {
      this.selected.emit(this.hero);
    }
  }