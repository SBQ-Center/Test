export const location={
 address:{ar:'اليمن، محافظة الضالع، مدينة الضالع، شارع المطار',en:'Airport Street, Al-Dhale City, Al-Dhale Governorate, Yemen'},
 coordinates:{latitude:null as number|null,longitude:null as number|null},
 googleMapsUrl:'',googleMapsEmbedUrl:'',showMap:false
} as const;
export const hasValidMapConfiguration=()=>Boolean(location.showMap&&location.googleMapsUrl.trim()&&location.googleMapsEmbedUrl.trim());
