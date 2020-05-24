import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {ContributionService} from '../services/contribution.service';

@Component({
    selector: 'app-submit',
    templateUrl: './submit.component.html',
    styleUrls: ['./submit.component.css'],
})
export class SubmitComponent implements OnInit {
    form;
    error = '';

    constructor(
        private formBuilder: FormBuilder,
        private contributionService: ContributionService,
    ) {
        this.form = this.formBuilder.group({
            title: '',
            url: '',
            text: ''
        });
    }

    ngOnInit(): void {
    }

    onClick(params: {title: string, url: string, text: string}): void {
        if (this.isValid(params)) {
            this.error = '';
            this.form.reset();
            this.contributionService.createContribution(params);
        }
    }

    private isValid(params: {title: string, url: string, text: string}): boolean {
        if (params.title === null || params.title === '') {
            this.error = 'The title cannot be empty.';
            return false;
        }
        if (params.title.length > 80) {
            this.error = 'The title must not exceed the 80 characters.';
            return false;
        }
        const validUrl = this.isValidUrl(params.url);
        if (validUrl && params.text !== null && params.text !== '') {
            this.error =
                'Submissions can\'t have both urls and text, so you need to pick one. If you keep the url, you can '
                + 'always post your text as a comment in the thread.';
            return false;
        }
        if ((params.url === null || params.url === '') && (params.text === null || params.text === '')) {
            this.error = 'Sorry, either url or text fields must be filled.';
            return false;
        }
        if (!validUrl && (params.text === null || params.text === '')) {
            this.error = 'Invalid url.';
            return false;
        }
        if (!validUrl && (params.text !== null || params.text !== '')) {
            params.url = '';
        }
        return true;
    }

    private isValidUrl(url: string) {
        if (url !== null) {
            const urlSplit = url.split('/');
            let result = true;
            if (urlSplit.length > 1) {
                result = urlSplit[0] === 'http:' || urlSplit[0] === 'https:';
            }
            if (urlSplit.length >= 2) {
                result = result && urlSplit[1] === '';
            }
            return url.includes('.') && result;
        }
        return false;
    }
}
