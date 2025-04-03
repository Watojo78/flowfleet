import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, Subscription } from 'rxjs';
import { EmptyComponent } from './empty/empty.component';
import { AdminComponent } from './admin/admin.component';

@Component({
  selector: 'fleet-layout',
  standalone: true,
  imports: [EmptyComponent, AdminComponent],
  templateUrl: './layout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent implements OnInit, OnDestroy {
  layout = 'empty'; // Set empty as default
  currentChildrenPath = '';
  private subscription: Subscription | undefined;
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);

  ngOnInit(): void {
    this.updateLayoutData(); // Update on initial load
    this.subscription = this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd), // Filter NavigationEnd events
      )
      .subscribe(() => this.updateLayoutData());
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  private updateChildrenPath(): void {
    const children = this.route.firstChild?.children;
    this.currentChildrenPath = children
      ? children[0].snapshot.url.join('/')
      : '';
  }

  private updateLayoutData(): void {
    const routeData = this.route.snapshot.data;
    this.layout = routeData?.['layout'] || 'empty'; // Use empty as default if not defined
  }
}
