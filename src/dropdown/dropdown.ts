import { FormControl } from '@angular/forms';
import {
    AfterViewInit,
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    EventEmitter,
    Input,
    Output,
    ViewChild
} from '@angular/core';

declare var jQuery: any;

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'sm-dropdown',
  template: `
    <div
      class="ui {{class}} dropdown"
      (focus)="onFocus.next($event)"
      (blur)="onBlur.next($event)"
      #dropdown>
        <input type="hidden" name="{{name}}" [formControl]="control" #input>
        <i *ngIf="icon" class="{{icon}} icon"></i>
        <div *ngIf="title" class="default text">{{title}}</div>
        <i class="{{arrowIcon}} icon"></i>
        <div class="menu">
            <ng-content></ng-content>
        </div>
    </div>
`
})
export class SemanticDropdownComponent implements AfterViewInit {
  @Input() control: FormControl = new FormControl();
  @Input() class: string;
  @Input() title: string;
  @Input() icon: string;
  @Input() arrowIcon: string = 'dropdown';
  @Input() name: string;
  @Input() items: Array<{}>;
  @Input() options: {} = {};
  @Input() value: number;
  @Output() valueChange: EventEmitter<number> = new EventEmitter<number>();
  @Output() onChange: EventEmitter<string|number> = new EventEmitter<string|number>();
  @Output() onFocus: EventEmitter<FocusEvent> = new EventEmitter<FocusEvent>();
  @Output() onBlur: EventEmitter<FocusEvent> = new EventEmitter<FocusEvent>();
  @ViewChild('dropdown') dropdown: ElementRef;
  @ViewChild('input') input: ElementRef;

  ngAfterViewInit(): void {
    const options: {} = Object.assign({
      onChange: (value: string|number, a: string|number, b: Array<HTMLElement>) => {
        if (b != null && b.length) {
          this.value = parseInt(b[0].dataset['value'], 10);
          this.control.setValue(this.value);
          this.input.nativeElement.value = this.value;
          this.valueChange.emit(this.value);
          this.onChange.emit(b[0].innerText);
        }
      }
    }, this.options);

    jQuery(this.dropdown.nativeElement)
      .dropdown(options);
  }

  select(items: any): void {
    jQuery(this.dropdown.nativeElement)
      .dropdown('set selected', items);
  }

  clear(): void {
    this.control.setValue(null);
    jQuery(this.dropdown.nativeElement)
      .dropdown('clear');
  }
}
