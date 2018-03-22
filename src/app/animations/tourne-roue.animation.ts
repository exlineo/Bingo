// import the required animation functions from the angular animations module
import { AnimationEntryMetadata, trigger, state, style, transition, animate } from '@angular/core';
// https://stackoverflow.com/questions/39463360/how-do-you-create-reusable-animations-in-angular-2

export function lanceRoueAnimation( degres: number=360, duree: number = 0.5 ): AnimationEntryMetadata {
    console.log("fonction appelée");
    return trigger( 'tourneRoueAnimation', [
            state('false', style({ transform: 'rotate('+Math.round(Math.random()*3600)+'deg)' }) ),
            state('true',  style({ transform: 'rotate(' + degres + 'deg)' }) ),
            transition('0 => 1', animate( '1500ms ease-in')),
            transition('1 => 0', animate( '1500ms ease-out'))
        ]);
}