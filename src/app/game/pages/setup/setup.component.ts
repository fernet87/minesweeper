import { Component, Inject, OnInit } from '@angular/core';
import { Option } from 'src/app/framework/controls/fields/select-field/select-field.component';
import { ConfigService } from '../../services/config.service';
import { ConfigModel, DifficultyLevel } from '../../models/config.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.scss']
})
export class SetupComponent implements OnInit {
  public difficultyLevels: Array<Option> = [
    { label: DifficultyLevel[DifficultyLevel.CUSTOM], value: DifficultyLevel.CUSTOM.toString() },
    { label: DifficultyLevel[DifficultyLevel.EASY], value: DifficultyLevel.EASY.toString() },
    { label: DifficultyLevel[DifficultyLevel.MEDIUM], value: DifficultyLevel.MEDIUM.toString() },
    { label: DifficultyLevel[DifficultyLevel.HARD], value: DifficultyLevel.HARD.toString() }
  ];

  public config: ConfigModel | undefined;

  constructor(protected router: Router, @Inject(ConfigService) private configService: ConfigService) {
    this.config = undefined;
  }
  
  ngOnInit(): void {
    this.configService.restoreConfig();
    this.config = this.configService.getConfig();
  }

  public onGoToBoardClick(): void {
    this.configService.storeConfig();
    this.navigateToBoard();
  }

  public navigateToBoard(): void {
    this.router.navigateByUrl('/board');
  }

  public onDifficultyLevelChange(event?: Event): void {
    this.configService.doConfig();
    this.config = this.configService.getConfig();
  }

  public isCustomDifficultyLevel(): boolean {
    return (this.config && this.config.getDifficultyLevel()) === DifficultyLevel.CUSTOM;
  }

}

