angular
  .module('poool-example')
  .component('subscription', {
    template: `
      <div class="page subscribe">
        <div class="container">
          <header on-login="$ctrl.onLogin()"></header>

          <h1>Our offers</h1>
          <p>This is a subscription page, without any paywall, where you list all your subscription offers.</p>
          <ul>
            <li><a ng-href="/">Home</a></li>
            <li><a ng-href="/premium">Premium post</a></li>
            <li><a ng-href="/free">Free post</a></li>
          </ul>
        </div>
      </div>
    `,
    controller: class SubscriptionCtrl {
      $onInit() {
        this.sendHit();
      }

      onLogin() {
        this.sendHit();
      }

      sendHit() {
        poool('config', 'user_is_premium', window.testUser?.premium || false);
        poool('send', 'page-view', 'subscription');
      }
    },
  });
