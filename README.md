# VesaxNg

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


calculateIbanCheckDigits(iban: string): string {
    iban = iban.replace(/\s+/g, '').toUpperCase();
    const rearrangedIban = iban.slice(4) + iban.slice(0, 4);
    const numericIban = rearrangedIban.split('').map(char => this.convertLetterToNumber(char)).join('');
    const remainder = this.mod97(numericIban);
    const checkDigits = 98 - remainder;

    return checkDigits.toString().padStart(2, '0');
  }

  generateIbanWithCheckDigits(iban: string): string {
    const ibanWithTemporaryCheckDigits = iban.slice(0, 2) + '00' + iban.slice(4);
    const checkDigits = this.calculateIbanCheckDigits(ibanWithTemporaryCheckDigits);
    const finalIban = iban.slice(0, 2) + checkDigits + iban.slice(4);

    return finalIban;
  }

  mod97(input: string): number {
    let checksum = 0;
    for (let i = 0; i < input.length; i++) {
      const digit = input[i];
      checksum = (checksum * 10 + parseInt(digit, 10)) % 97;
    }
    return checksum;
  }
