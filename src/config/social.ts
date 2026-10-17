export type SocialKey='facebook'|'x'|'youtube';
export interface SocialProfile{key:SocialKey;label:{ar:string;en:string};url:string;enabled:boolean}
export const socialProfiles:SocialProfile[]=[
 {key:'facebook',label:{ar:'فيسبوك',en:'Facebook'},url:'',enabled:false},
 {key:'x',label:{ar:'منصة إكس',en:'X'},url:'',enabled:false},
 {key:'youtube',label:{ar:'يوتيوب',en:'YouTube'},url:'',enabled:false}
];
export const activeSocialProfiles=socialProfiles.filter(p=>p.enabled&&p.url.trim().length>0);
