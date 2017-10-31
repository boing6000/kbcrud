import { OnInit } from '@angular/core';
export declare class KbvalidationComponent implements OnInit {
    messages: Array<string>;
    type: string;
    replaceMessage(message: string): string;
    constructor();
    ngOnInit(): void;
}
