"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7995],{7995:(W,u,o)=>{o.r(u),o.d(u,{PreChatPagePageModule:()=>R});var g=o(6895),f=o(433),c=o(8408),m=o(7551),v=o(7582),y=o(3099),C=o(2340),e=o(8274),x=o(7942),M=o(529),U=o(5730),A=o(51),T=o(8672);function S(t,r){1&t&&e._UZ(0,"div",11)}function Z(t,r){if(1&t){const a=e.EpF();e.TgZ(0,"div",5)(1,"div",6),e.NdJ("click",function(){const d=e.CHM(a).$implicit,i=e.oxw();return e.KtG(i.initiateChat(d.thirdPartyWeavyUserId,d.thirdPartyWeavyUid))}),e.TgZ(2,"div",7),e._uU(3),e.YNc(4,S,1,0,"div",8),e.qZA(),e.TgZ(5,"div",7)(6,"div",9),e._uU(7),e.qZA(),e.TgZ(8,"div",10),e._uU(9),e.ALo(10,"date"),e.qZA()()()()}if(2&t){const a=r.$implicit;e.xp6(3),e.hij(" ",a.thirdPartyUserName," "),e.xp6(1),e.Q6J("ngIf",a.isUnread>0),e.xp6(3),e.Oqu(a.lastMessage),e.xp6(2),e.Oqu(e.xi3(10,4,a.lastMessageTime,"MMM d, yyyy h:mm a"))}}const I=[{path:"",component:(()=>{class t{constructor(a,n,s,d,i,h){this.ionLoaderService=a,this.http=n,this.alertService=s,this.cookieService=d,this.router=i,this.weavyTokenService=h,this.associatedRooms=[]}ngOnInit(){null!=this.cookieService.getWeavyAccessToken&&null!=this.cookieService.getWeavyAccessToken&&this.cookieService.getWeavyAccessToken.length>0?this.getAssociatedRooms():this.weavyTokenService.getWeavyAccessToken()}getAssociatedRooms(){return(0,v.mG)(this,void 0,void 0,function*(){const n=this.http.get(`${C.N.chatServerBaseUrlV1}/api/conversations`).pipe((0,y.B)());return n.subscribe({next:s=>(0,v.mG)(this,void 0,void 0,function*(){if(null!=s)for(let d=0;d<s.data.length;d++){const i=s.data[d];let h=!1,P=-1,p=-1;for(let l=0;l<i.members.count;l++)Number(i.members.data[l].uid.split("RK-")[1])!=Number(this.cookieService.getUserId)&&("away"!=i.members.data[l].presence&&(h=!0),P=i.members.data[l].id,p=i.members.data[l].uid);this.associatedRooms.push({thirdPartyUserName:i.display_name,thirdPartyUserOnline:h,thirdPartyWeavyUserId:P,thirdPartyWeavyUid:p,roomId:i.id,lastMessage:i.last_message.text,lastMessageTime:i.last_message.created_at,lastMessageCreatedBy:Number(i.last_message.created_by.uid.split("RK-")[1]),isUnread:i.is_unread})}else this.alertService.presentAlert("Error",s)}),error:s=>{this.alertService.presentAlert("Error: Something went wrong! ",s)}}),n})}initiateChat(a,n){this.router.navigateByUrl("/chat",{state:{weavyUserId:a,weavyUid:n}})}}return t.\u0275fac=function(a){return new(a||t)(e.Y36(x.C),e.Y36(M.eN),e.Y36(U.c),e.Y36(A.R),e.Y36(m.F0),e.Y36(T.f))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-pre-chat-page"]],decls:10,vars:2,consts:[["slot","start"],[3,"scrollEvents"],["content",""],[1,"room"],["class","room-line-outer-span",4,"ngFor","ngForOf"],[1,"room-line-outer-span"],[1,"room-line",3,"click"],[1,"additionalInfoDiv"],["class","unreadMsgDot alignAtEnd","color","success",4,"ngIf"],[1,"mostRecentMsg"],[1,"alignAtEnd"],["color","success",1,"unreadMsgDot","alignAtEnd"]],template:function(a,n){1&a&&(e.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",0),e._UZ(3,"ion-menu-button"),e.qZA(),e.TgZ(4,"ion-title"),e._uU(5,"chat"),e.qZA()()(),e.TgZ(6,"ion-content",1,2)(8,"div",3),e.YNc(9,Z,11,7,"div",4),e.qZA()()),2&a&&(e.xp6(6),e.Q6J("scrollEvents",!0),e.xp6(3),e.Q6J("ngForOf",n.associatedRooms))},dependencies:[g.sg,g.O5,c.Sm,c.W2,c.Gu,c.fG,c.wd,c.sr,g.uU],styles:[".room[_ngcontent-%COMP%]{height:100%;width:100%}.room-line-outer-span[_ngcontent-%COMP%]{width:100%;height:auto;color:#fff;font-size:large;margin-top:10px;padding-right:15px;padding-left:15px}.room-line[_ngcontent-%COMP%]{width:100%;background-color:rgba(0,0,0,.157);border-radius:20px;padding:15px 25px}.additionalInfoDiv[_ngcontent-%COMP%]{display:flex;flex-direction:row}.alignAtEnd[_ngcontent-%COMP%]{margin-left:auto;margin-top:auto;text-align:right;font-size:x-small}.mostRecentMsg[_ngcontent-%COMP%]{padding-top:5px;text-align:left;font-size:small}.unreadMsgDot[_ngcontent-%COMP%]{height:10px;width:10px;border-radius:10px;background-color:#0ff}"]}),t})()}];let O=(()=>{class t{}return t.\u0275fac=function(a){return new(a||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[m.Bz.forChild(I),m.Bz]}),t})(),R=(()=>{class t{}return t.\u0275fac=function(a){return new(a||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[g.ez,f.u5,c.Pc,O]}),t})()}}]);