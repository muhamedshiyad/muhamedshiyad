exports.id=177,exports.ids=[177],exports.modules={2384:(e,t,s)=>{s.d(t,{HomeWebviewProvider:()=>h});var i=s(9496),o=s(9529);let r=new(s(5798)).jH("repositories/didChange"),n=Object.freeze({dispose:()=>{}});class h{constructor(e,t){this.container=e,this.host=t,this._disposable=i.Disposable.from(this.container.git.onDidChangeRepositories(this.onRepositoriesChanged,this),i.workspace.isTrusted?n:i.workspace.onDidGrantWorkspaceTrust(this.notifyDidChangeRepositories,this))}_disposable;dispose(){this._disposable.dispose()}onRepositoriesChanged(){this.notifyDidChangeRepositories()}registerCommands(){return[(0,o.xR)(`${this.host.id}.refresh`,()=>this.host.refresh(!0),this)]}includeBootstrap(){return this.getState()}onReloaded(){this.notifyDidChangeRepositories()}getState(){return{...this.host.baseWebviewState,repositories:this.getRepositoriesState(),webroot:this.host.getWebRoot()}}getRepositoriesState(){return{count:this.container.git.repositoryCount,openCount:this.container.git.openRepositoryCount,hasUnsafe:this.container.git.hasUnsafeRepositories(),trusted:i.workspace.isTrusted}}notifyDidChangeRepositories(){this.host.notify(r,this.getRepositoriesState())}}}};