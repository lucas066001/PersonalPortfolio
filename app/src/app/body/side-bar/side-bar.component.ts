import { Component } from '@angular/core';
import { ToolCompetence } from 'src/app/models/ToolCompetence';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent {
  public toolCompetencies:ToolCompetence[] = [
    new ToolCompetence("Git", 83, "./assets/img/git_icon.svg"),
    new ToolCompetence("VsCode", 97, "./assets/img/vscode_icon.svg"),
    new ToolCompetence("Unix", 70, "./assets/img/unix_icon.svg"),
    new ToolCompetence("Windows", 85, "./assets/img/windows_icon.svg"),
    new ToolCompetence("Azure DevOps", 80, "./assets/img/azure_icon.svg"),
    new ToolCompetence("Adobe Illustrator", 79, "./assets/img/illustrator_icon.svg"),
  ]
}
