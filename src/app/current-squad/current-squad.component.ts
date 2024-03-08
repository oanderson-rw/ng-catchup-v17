import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-current-squad',
  standalone: true,
  imports: [],
  templateUrl: './current-squad.component.html',
  styleUrl: './current-squad.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CurrentSquadComponent {

}
