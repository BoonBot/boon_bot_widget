import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Widget from './widget';

console.log("Hello from Boon Widget");

export default class BoonWidget {
  private userId: string;
  private botId: string;
  private rootNode: ReactDOM.Root | undefined;

  constructor(userId: string, botId: string) {
    this.userId = userId;
    this.botId = botId;
    this.mount();
  }

  mount() {
    const component = <Widget userId={this.userId} botId={this.botId} />;

    const doRender = () => {
      if (this.rootNode) throw new Error('Already mounted');
      const el = document.createElement('div');
      el.id = 'boon-widget';
      document.body.appendChild(el);

      this.rootNode = ReactDOM.createRoot(el);
      this.rootNode.render(component);
    }

    if (document.readyState === 'complete') doRender();
    else window.addEventListener('load', doRender);
  }

  unmount() {
    console.log("Unmounting Boon Widget");
    if (!this.rootNode) throw new Error('Not mounted');
    this.rootNode.unmount();
  }
}