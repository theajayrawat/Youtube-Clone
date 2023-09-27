const GOGGLE_API_KEY="AIzaSyDf_OhHqWhMav5it2PVg7V6ilT39yBA7QI"
export const YOUTUBE_VIDEOS_API=
"https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key="
+GOGGLE_API_KEY;

export const YOUTUBE_SEARCH_API=
"http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const LIVE_CHAT_COUNT=15;

export const LIVE_CHAT_API=
"https://www.googleapis.com/youtube/v3/liveChat/messages?liveChatId=Cg0KCzZwX0pNLUk3RlVnKicKGFVDdmpnWHZCbGJRaXlkZmZaVTdtMV9hdxILNnBfSk0tSTdGVWc&part=snippet,authorDetails&maxResults=2000&key="+GOGGLE_API_KEY;
