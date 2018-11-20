import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { DxTreeViewComponent } from 'devextreme-angular';

@Component({
    selector: 'app-treeview',
    templateUrl: './treeview.component.html',
    styleUrls: ['./treeview.component.css']
})
export class TreeviewComponent implements OnInit, OnDestroy {
    widgetGroup = 'treeview';
    isExpanded = new Subject<boolean>();
    subscription: Subscription;

    @ViewChild('treeView') treeView: DxTreeViewComponent;

    collapsedOptions = {
        items: [
            {
                id: 1,
                text: '.NET',
                'expanded': true,
                items: [
                    {
                        id: 11,
                        text: 'Individual Platforms',
                        selected: true,
                        items: [
                            { id: 111, text: 'WinForms' },
                            { id: 112, text: 'ASP.NET' },
                            { id: 113, text: 'MVC' },
                            { id: 114, text: 'WPF' },
                            { id: 115, text: 'Silverlight' },
                            { id: 116, text: 'Windows 8 XAML' }
                        ]
                    },
                    {
                        id: 12,
                        text: 'Frameworks',
                        items: [
                            { id: 121, text: 'eXpressApp Framework' }
                        ]
                    },
                    {
                        id: 13,
                        text: 'Code-Debug-Refactor',
                        items: [
                            { id: 131, text: 'CodeRush for Visual Studio' }
                        ]
                    },
                    {
                        id: 14,
                        text: 'Mobile (HTML JS)',
                        items: [
                            { id: 141, text: 'DevExtreme' }
                        ]
                    },
                    {
                        id: 15,
                        text: 'Cross-Platform',
                        items: [
                            { id: 151, text: 'Reporting' },
                            { id: 152, text: 'Document Generation' }
                        ]
                    },
                    {
                        id: 16,
                        text: 'Enterprise Tools',
                        items: [
                            { id: 161, text: 'Report Server' },
                            { id: 162, text: 'Analytics Dashboard' }
                        ]
                    }
                ]
            }
        ]
    };

    expandedOptions = {
        'showCheckBoxes': true,
        'selectAllEnabled': true,
        items: [
            {
                id: 1,
                text: '.NET',
                items: [
                    {
                        id: 11,
                        text: 'Individual Platforms',
                        items: [
                            { id: 111, text: 'WinForms' },
                            { id: 112, text: 'ASP.NET' },
                            { id: 113, text: 'MVC' },
                            { id: 114, text: 'WPF' },
                            { id: 115, text: 'Silverlight' },
                            { id: 116, text: 'Windows 8 XAML' }
                        ],
                        selected: true,
                        'expanded': true
                    },
                    {
                        id: 12,
                        text: 'Frameworks',
                        items: [
                            { id: 121, text: 'eXpressApp Framework' }
                        ]
                    },
                    {
                        id: 13,
                        text: 'Code-Debug-Refactor',
                        items: [
                            { id: 131, text: 'CodeRush for Visual Studio' }
                        ]
                    },
                    {
                        id: 14,
                        text: 'Mobile (HTML JS)',
                        items: [
                            { id: 141, text: 'DevExtreme' }
                        ]
                    },
                    {
                        id: 15,
                        text: 'Cross-Platform',
                        items: [
                            { id: 151, text: 'Reporting' },
                            { id: 152, text: 'Document Generation' }
                        ]
                    },
                    {
                        id: 16,
                        text: 'Enterprise Tools',
                        items: [
                            { id: 161, text: 'Report Server' },
                            { id: 162, text: 'Analytics Dashboard' }
                        ]
                    }
                ]
            },
            {
                id: 2,
                text: 'HTML JavaScript',
                items: [
                    {
                        id: 21,
                        text: 'Mobile',
                        items: [
                            { id: 211, text: 'Phone JS' }
                        ]
                    },
                    {
                        id: 22,
                        text: 'HTML 5 JS Widgets',
                        items: [
                            { id: 221, text: 'Chart JS' }
                        ]
                    }
                ]
            },
            {
                id: 3,
                text: 'iOS 7',
                items: [
                    {
                        id: 31,
                        text: 'Native',
                        items: [
                            { id: 311, text: 'DataExplorer' }
                        ]
                    }
                ]
            },
            {
                id: 4,
                text: 'Testing Tools',
                items: [
                    {
                        id: 41,
                        text: 'Web Testing',
                        items: [
                            { id: 441, text: 'TestCafe' }
                        ]
                    }
                ]
            },
            {
                id: 5,
                text: 'Delphi & C++Builder'
            }
        ]
    };

    ngOnInit() {
        this.subscription = this.isExpanded.subscribe((expanded) => {
            this.treeView.instance.option(expanded ? this.expandedOptions : this.collapsedOptions);
            this.treeView.instance.updateDimensions();
        });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}