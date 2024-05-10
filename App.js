export default class App {
  constructor() {
  	
  	this.color = ['primary', 'secondary', 'success', 'danger', 'warning', 'info'];
  	
  	this.search_svg = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" class="bi bi-search" viewBox="0 0 16 16"><path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/></svg>`;//search.svg
  	this.hash_svg = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" class="bi bi-hash" viewBox="0 0 16 16"><path d="M8.39 12.648a1.32 1.32 0 0 0-.015.18c0 .305.21.508.5.508.266 0 .492-.172.555-.477l.554-2.703h1.204c.421 0 .617-.234.617-.547 0-.312-.188-.53-.617-.53h-.985l.516-2.524h1.265c.43 0 .618-.227.618-.547 0-.313-.188-.524-.618-.524h-1.046l.476-2.304a1.06 1.06 0 0 0 .016-.164.51.51 0 0 0-.516-.516.54.54 0 0 0-.539.43l-.523 2.554H7.617l.477-2.304c.008-.04.015-.118.015-.164a.512.512 0 0 0-.523-.516.539.539 0 0 0-.531.43L6.53 5.484H5.414c-.43 0-.617.22-.617.532 0 .312.187.539.617.539h.906l-.515 2.523H4.609c-.421 0-.609.219-.609.531 0 .313.188.547.61.547h.976l-.516 2.492c-.008.04-.015.125-.015.18 0 .305.21.508.5.508.265 0 .492-.172.554-.477l.555-2.703h2.242l-.515 2.492zm-1-6.109h2.266l-.515 2.563H6.859l.532-2.563z"/></svg>`;//hash.svg
  	this.change_svg = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" class="bi bi-pen" viewBox="0 0 16 16"><path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z"/></svg>`; //pen.svg
  	this.back_svg = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" class="bi bi-reply" viewBox="0 0 16 16"><path d="M6.598 5.013a.144.144 0 0 1 .202.134V6.3a.5.5 0 0 0 .5.5c.667 0 2.013.005 3.3.822.984.624 1.99 1.76 2.595 3.876-1.02-.983-2.185-1.516-3.205-1.799a8.74 8.74 0 0 0-1.921-.306 7.404 7.404 0 0 0-.798.008h-.013l-.005.001h-.001L7.3 9.9l-.05-.498a.5.5 0 0 0-.45.498v1.153c0 .108-.11.176-.202.134L2.614 8.254a.503.503 0 0 0-.042-.028.147.147 0 0 1 0-.252.499.499 0 0 0 .042-.028l3.984-2.933zM7.8 10.386c.068 0 .143.003.223.006.434.02 1.034.086 1.7.271 1.326.368 2.896 1.202 3.94 3.08a.5.5 0 0 0 .933-.305c-.464-3.71-1.886-5.662-3.46-6.66-1.245-.79-2.527-.942-3.336-.971v-.66a1.144 1.144 0 0 0-1.767-.96l-3.994 2.94a1.147 1.147 0 0 0 0 1.946l3.994 2.94a1.144 1.144 0 0 0 1.767-.96v-.667z"/></svg>`;//reply.svg
  	this.delete_svg = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" class="bi bi-trash" viewBox="0 0 16 16"><path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"/><path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"/></svg>`;//trash.svg
  	this.save_svg = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" class="bi bi-floppy" viewBox="0 0 16 16"><path d="M11 2H9v3h2V2Z"/><path d="M1.5 0h11.586a1.5 1.5 0 0 1 1.06.44l1.415 1.414A1.5 1.5 0 0 1 16 2.914V14.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 14.5v-13A1.5 1.5 0 0 1 1.5 0ZM1 1.5v13a.5.5 0 0 0 .5.5H2v-4.5A1.5 1.5 0 0 1 3.5 9h9a1.5 1.5 0 0 1 1.5 1.5V15h.5a.5.5 0 0 0 .5-.5V2.914a.5.5 0 0 0-.146-.353l-1.415-1.415A.5.5 0 0 0 13.086 1H13v4.5A1.5 1.5 0 0 1 11.5 7h-7A1.5 1.5 0 0 1 3 5.5V1H1.5a.5.5 0 0 0-.5.5Zm3 4a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5V1H4v4.5ZM3 15h10v-4.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5V15Z"/></svg>`;//floppy.svg
  	this.menu_svg = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" class="bi bi-three-dots-vertical" viewBox="0 0 16 16"><path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/></svg>`;//three_dots_vertical.svg
  	this.file_download_svg = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#0d6efd" class="bi bi-file-earmark-arrow-down" viewBox="0 0 16 16"><path d="M8.5 6.5a.5.5 0 0 0-1 0v3.793L6.354 9.146a.5.5 0 1 0-.708.708l2 2a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0-.708-.708L8.5 10.293z"/><path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2M9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z"/></svg>`; //arrow-down-circle.svg
  	this.file_image_svg = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#ffc107" class="bi bi-file-earmark-image" viewBox="0 0 16 16"><path d="M6.502 7a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"/><path d="M14 14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zM4 1a1 1 0 0 0-1 1v10l2.224-2.224a.5.5 0 0 1 .61-.075L8 11l2.157-3.02a.5.5 0 0 1 .76-.063L13 10V4.5h-2A1.5 1.5 0 0 1 9.5 3V1z"/></svg>`;//file-earmark-image.svg
  	this.file_binary_svg = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#6c757d" class="bi bi-file-earmark-binary" viewBox="0 0 16 16"><path d="M7.05 11.885c0 1.415-.548 2.206-1.524 2.206C4.548 14.09 4 13.3 4 11.885c0-1.412.548-2.203 1.526-2.203.976 0 1.524.79 1.524 2.203m-1.524-1.612c-.542 0-.832.563-.832 1.612q0 .133.006.252l1.559-1.143c-.126-.474-.375-.72-.733-.72zm-.732 2.508c.126.472.372.718.732.718.54 0 .83-.563.83-1.614q0-.129-.006-.25zm6.061.624V14h-3v-.595h1.181V10.5h-.05l-1.136.747v-.688l1.19-.786h.69v3.633z"/><path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2M9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z"/></svg>`;//file-earmark-binary.svg
  	this.file_code_svg = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#d63384" class="bi bi-file-earmark-code" viewBox="0 0 16 16"><path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5z"/><path d="M8.646 6.646a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L10.293 9 8.646 7.354a.5.5 0 0 1 0-.708m-1.292 0a.5.5 0 0 0-.708 0l-2 2a.5.5 0 0 0 0 .708l2 2a.5.5 0 0 0 .708-.708L5.707 9l1.647-1.646a.5.5 0 0 0 0-.708"/></svg>`;//file-earmark-code.svg
  	this.file_audio_svg = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#198754" class="bi bi-file-earmark-music" viewBox="0 0 16 16"><path d="M11 6.64a1 1 0 0 0-1.243-.97l-1 .25A1 1 0 0 0 8 6.89v4.306A2.6 2.6 0 0 0 7 11c-.5 0-.974.134-1.338.377-.36.24-.662.628-.662 1.123s.301.883.662 1.123c.364.243.839.377 1.338.377s.974-.134 1.338-.377c.36-.24.662-.628.662-1.123V8.89l2-.5z"/><path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2M9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z"/></svg>`;//file-earmark-music.svg
  	this.file_video_svg = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#6f42c1" class="bi bi-file-earmark-play" viewBox="0 0 16 16"><path d="M6 6.883v4.234a.5.5 0 0 0 .757.429l3.528-2.117a.5.5 0 0 0 0-.858L6.757 6.454a.5.5 0 0 0-.757.43z"/><path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2M9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z"/></svg>`;//file-earmark-video.svg
  	this.file_pdf_svg = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#dc3545" class="bi bi-file-earmark-pdf" viewBox="0 0 16 16"><path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2M9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z"/><path d="M4.603 14.087a.8.8 0 0 1-.438-.42c-.195-.388-.13-.776.08-1.102.198-.307.526-.568.897-.787a7.7 7.7 0 0 1 1.482-.645 20 20 0 0 0 1.062-2.227 7.3 7.3 0 0 1-.43-1.295c-.086-.4-.119-.796-.046-1.136.075-.354.274-.672.65-.823.192-.077.4-.12.602-.077a.7.7 0 0 1 .477.365c.088.164.12.356.127.538.007.188-.012.396-.047.614-.084.51-.27 1.134-.52 1.794a11 11 0 0 0 .98 1.686 5.8 5.8 0 0 1 1.334.05c.364.066.734.195.96.465.12.144.193.32.2.518.007.192-.047.382-.138.563a1.04 1.04 0 0 1-.354.416.86.86 0 0 1-.51.138c-.331-.014-.654-.196-.933-.417a5.7 5.7 0 0 1-.911-.95 11.7 11.7 0 0 0-1.997.406 11.3 11.3 0 0 1-1.02 1.51c-.292.35-.609.656-.927.787a.8.8 0 0 1-.58.029m1.379-1.901q-.25.115-.459.238c-.328.194-.541.383-.647.547-.094.145-.096.25-.04.361q.016.032.026.044l.035-.012c.137-.056.355-.235.635-.572a8 8 0 0 0 .45-.606m1.64-1.33a13 13 0 0 1 1.01-.193 12 12 0 0 1-.51-.858 21 21 0 0 1-.5 1.05zm2.446.45q.226.245.435.41c.24.19.407.253.498.256a.1.1 0 0 0 .07-.015.3.3 0 0 0 .094-.125.44.44 0 0 0 .059-.2.1.1 0 0 0-.026-.063c-.052-.062-.2-.152-.518-.209a4 4 0 0 0-.612-.053zM8.078 7.8a7 7 0 0 0 .2-.828q.046-.282.038-.465a.6.6 0 0 0-.032-.198.5.5 0 0 0-.145.04c-.087.035-.158.106-.196.283-.04.192-.03.469.046.822q.036.167.09.346z"/></svg>`;//file-earmark-pdf.svg
  	this.file_txt_svg = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" class="bi bi-file-earmark-text" viewBox="0 0 16 16"><path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5"/><path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z"/></svg>`;//file-earmark-text.svg
  	this.file_word_svg = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#0d6efd" class="bi bi-file-earmark-word" viewBox="0 0 16 16"><path d="M5.485 6.879a.5.5 0 1 0-.97.242l1.5 6a.5.5 0 0 0 .967.01L8 9.402l1.018 3.73a.5.5 0 0 0 .967-.01l1.5-6a.5.5 0 0 0-.97-.242l-1.036 4.144-.997-3.655a.5.5 0 0 0-.964 0l-.997 3.655L5.485 6.88z"/><path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2M9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z"/></svg>`;//file-earmark-word.svg
    this.file_zip_svg = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#6610f2" class="bi bi-file-earmark-zip" viewBox="0 0 16 16"><path d="M5 7.5a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v.938l.4 1.599a1 1 0 0 1-.416 1.074l-.93.62a1 1 0 0 1-1.11 0l-.929-.62a1 1 0 0 1-.415-1.074L5 8.438zm2 0H6v.938a1 1 0 0 1-.03.243l-.4 1.598.93.62.929-.62-.4-1.598A1 1 0 0 1 7 8.438z"/><path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1h-2v1h-1v1h1v1h-1v1h1v1H6V5H5V4h1V3H5V2h1V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5z"/></svg>`;//file-earmark-zip.svg
    this.file_spreadsheet_svg = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#20c997" class="bi bi-file-earmark-spreadsheet" viewBox="0 0 16 16"><path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2M9.5 3A1.5 1.5 0 0 0 11 4.5h2V9H3V2a1 1 0 0 1 1-1h5.5zM3 12v-2h2v2zm0 1h2v2H4a1 1 0 0 1-1-1zm3 2v-2h3v2zm4 0v-2h3v1a1 1 0 0 1-1 1zm3-3h-3v-2h3zm-7 0v-2h3v2z"/></svg>`;//file-earmark-spreadsheet
    this.file_ppt_svg = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#0dcaf0" class="bi bi-file-earmark-ppt" viewBox="0 0 16 16"><path d="M7 5.5a1 1 0 0 0-1 1V13a.5.5 0 0 0 1 0v-2h1.188a2.75 2.75 0 0 0 0-5.5zM8.188 10H7V6.5h1.188a1.75 1.75 0 1 1 0 3.5"/><path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5z"/></svg>`;//file-earmark-ppt.svg

    this.MD5 = function(d){var r = M(V(Y(X(d),8*d.length)));return r.toLowerCase()};function M(d){for(var _,m="0123456789ABCDEF",f="",r=0;r<d.length;r++)_=d.charCodeAt(r),f+=m.charAt(_>>>4&15)+m.charAt(15&_);return f}function X(d){for(var _=Array(d.length>>2),m=0;m<_.length;m++)_[m]=0;for(m=0;m<8*d.length;m+=8)_[m>>5]|=(255&d.charCodeAt(m/8))<<m%32;return _}function V(d){for(var _="",m=0;m<32*d.length;m+=8)_+=String.fromCharCode(d[m>>5]>>>m%32&255);return _}function Y(d,_){d[_>>5]|=128<<_%32,d[14+(_+64>>>9<<4)]=_;for(var m=1732584193,f=-271733879,r=-1732584194,i=271733878,n=0;n<d.length;n+=16){var h=m,t=f,g=r,e=i;f=md5_ii(f=md5_ii(f=md5_ii(f=md5_ii(f=md5_hh(f=md5_hh(f=md5_hh(f=md5_hh(f=md5_gg(f=md5_gg(f=md5_gg(f=md5_gg(f=md5_ff(f=md5_ff(f=md5_ff(f=md5_ff(f,r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+0],7,-680876936),f,r,d[n+1],12,-389564586),m,f,d[n+2],17,606105819),i,m,d[n+3],22,-1044525330),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+4],7,-176418897),f,r,d[n+5],12,1200080426),m,f,d[n+6],17,-1473231341),i,m,d[n+7],22,-45705983),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+8],7,1770035416),f,r,d[n+9],12,-1958414417),m,f,d[n+10],17,-42063),i,m,d[n+11],22,-1990404162),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+12],7,1804603682),f,r,d[n+13],12,-40341101),m,f,d[n+14],17,-1502002290),i,m,d[n+15],22,1236535329),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+1],5,-165796510),f,r,d[n+6],9,-1069501632),m,f,d[n+11],14,643717713),i,m,d[n+0],20,-373897302),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+5],5,-701558691),f,r,d[n+10],9,38016083),m,f,d[n+15],14,-660478335),i,m,d[n+4],20,-405537848),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+9],5,568446438),f,r,d[n+14],9,-1019803690),m,f,d[n+3],14,-187363961),i,m,d[n+8],20,1163531501),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+13],5,-1444681467),f,r,d[n+2],9,-51403784),m,f,d[n+7],14,1735328473),i,m,d[n+12],20,-1926607734),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+5],4,-378558),f,r,d[n+8],11,-2022574463),m,f,d[n+11],16,1839030562),i,m,d[n+14],23,-35309556),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+1],4,-1530992060),f,r,d[n+4],11,1272893353),m,f,d[n+7],16,-155497632),i,m,d[n+10],23,-1094730640),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+13],4,681279174),f,r,d[n+0],11,-358537222),m,f,d[n+3],16,-722521979),i,m,d[n+6],23,76029189),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+9],4,-640364487),f,r,d[n+12],11,-421815835),m,f,d[n+15],16,530742520),i,m,d[n+2],23,-995338651),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+0],6,-198630844),f,r,d[n+7],10,1126891415),m,f,d[n+14],15,-1416354905),i,m,d[n+5],21,-57434055),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+12],6,1700485571),f,r,d[n+3],10,-1894986606),m,f,d[n+10],15,-1051523),i,m,d[n+1],21,-2054922799),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+8],6,1873313359),f,r,d[n+15],10,-30611744),m,f,d[n+6],15,-1560198380),i,m,d[n+13],21,1309151649),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+4],6,-145523070),f,r,d[n+11],10,-1120210379),m,f,d[n+2],15,718787259),i,m,d[n+9],21,-343485551),m=safe_add(m,h),f=safe_add(f,t),r=safe_add(r,g),i=safe_add(i,e)}return Array(m,f,r,i)}function md5_cmn(d,_,m,f,r,i){return safe_add(bit_rol(safe_add(safe_add(_,d),safe_add(f,i)),r),m)}function md5_ff(d,_,m,f,r,i,n){return md5_cmn(_&m|~_&f,d,_,r,i,n)}function md5_gg(d,_,m,f,r,i,n){return md5_cmn(_&f|m&~f,d,_,r,i,n)}function md5_hh(d,_,m,f,r,i,n){return md5_cmn(_^m^f,d,_,r,i,n)}function md5_ii(d,_,m,f,r,i,n){return md5_cmn(m^(_|~f),d,_,r,i,n)}function safe_add(d,_){var m=(65535&d)+(65535&_);return(d>>16)+(_>>16)+(m>>16)<<16|65535&m}function bit_rol(d,_){return d<<_|d>>>32-_};
    
    this.url = 'https://memoryspeak.ru/ms/api/index.php';
    this.create();
    this.init();
    
    this.page = 'login'; //login, new, search
    this.content.innerHTML = this.getHtmlFromPage();
    this.isLogin = false;
    this.username = '';
    this.md5password = '';
    
    this.show();
    this.handle();
  }

  create() {
    this.header = document.createElement('div');
    this.headerCover = document.createElement('div');
    this.content = document.createElement('div');
    this.footer = document.createElement('div');
  }

  init() {
    this.header.style = 'height: 50px; background-color: white; position: fixed; z-index: 1; left: 0px; top: 0px; right: 0px; overflow: auto; box-shadow: 0px 0px 10px 0px #111;'
    this.header.innerHTML = `
    <a style="cursor:pointer;position:fixed;left:10px;" id="msIcon">
      <img style="background-color:transparent;display:inline;height:50px;" title="MemorySpeak" src="./img/ms.png">
    </a>
    <a id="searchIcon" title="Search" style="background-color:transparent;cursor:pointer;position:fixed;right:20px;top:10px;">
      ${this.search_svg}
    </a>`;
    this.headerCover.style = 'height: 50px';
    this.footer.innerHTML = `<hr>Hello, <a href="mailto: iliya.abdrakhimov@gmail.com">write</a> if you have questions.<hr>`;
  }

  show() {
    document.body.append(this.header);
    document.body.append(this.headerCover);
    document.body.append(this.content);
    document.body.append(this.footer);
  }

  formatBytes(bytes, decimals = 2) {
  	if (bytes == 0) return '0 Bytes';

  	const k = 1024;
  	const dm = decimals < 0 ? 0 : decimals;
  	const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB'];

  	const i = Math.floor(Math.log(bytes) / Math.log(k));

  	return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  }

  getExtention(filename) {
  	return filename.slice((Math.max(0, filename.lastIndexOf(".")) || Infinity) + 1);
  }

  getHtmlFromPage() {
    switch(this.page) {
      case "login":
        return `
          <div class="form-floating mt-3 mb-3">
            <input type="text" class="form-control" id="login_input_username" placeholder="Username">
            <label for="login_input_username">Username</label>
          </div>
          <div class="form-floating mb-3">
            <input type="password" class="form-control" id="login_input_password" placeholder="Password">
            <label for="login_input_password">Password</label>
          </div>
          <button type="button" class="btn btn-dark mb-3 fw-bold" id="login_button" title="Login">
            Login
            <span id="login_spinner" class="spinner-border spinner-border-sm float-end mt-1 ms-2" role="status" aria-hidden="true" style="display:none;"></span>
          </button>
        `;
      case "new":
        return `
          <button type="button" class="btn btn-dark mt-3 mb-3 fw-bold" id="new_button_create_a_new_note">
            Create A New Note
            <span id="new_spinner" class="spinner-border spinner-border-sm float-end mt-1 ms-2" role="status" aria-hidden="true" style="display:none;"></span>
          </button>
          <div class="form-floating mb-3">
            <input type="text" class="form-control" id="new_input_tag" placeholder="#">
            <label for="new_input_tag"><a>${this.hash_svg}</a></label>
            <button id="new_input_tag_clear_button" type="button" class="btn-close position-absolute" aria-label="Clear" title="Clear" style="right:10px;top:18px;display:none;"></button>
          </div>
          <div id="new_tags_panel" class="form-floating mb-3"></div>
          <div class="form-floating mb-3">
            <input type="text" class="form-control" id="new_input_title" placeholder="Title">
            <label for="new_input_title">Title</label>
            <button id="new_input_title_clear_button" type="button" class="btn-close position-absolute" aria-label="Clear" title="Clear" style="right:10px;top:18px;display:none;"></button>
          </div>
          <div class="form-floating mb-3">
            <textarea class="form-control" placeholder="Body" id="new_input_body" style="height: 100px"></textarea>
            <label for="new_input_body">Body</label>
            <button id="new_input_body_clear_button" type="button" class="btn-close position-absolute" aria-label="Clear" title="Clear" style="right:10px;top:18px;display:none;"></button>
          </div>
          <input type="file" class="form-control" id="new_input_file" multiple>
        `;
      case "search":
        return `
          <button type="button" class="btn btn-dark mt-3 mb-3 fw-bold" id="search_button_search_for_note">
            Search For Note
            <span id="search_spinner" class="spinner-border spinner-border-sm float-end mt-1 ms-2" role="status" aria-hidden="true" style="display:none;"></span>
          </button>
          <div class="form-floating mb-3">
            <input type="text" class="form-control" id="search_input" placeholder="&#128269;">
            <label for="search_input"><a>${this.search_svg}</a></label>
            <button id="search_input_clear_button" type="button" class="btn-close position-absolute" aria-label="Close" style="right:10px;top:18px;display:none;"></button>
          </div>
          <div id="search_tags_panel" class="form-floating mb-3"></div>
          <div class="form-floating mb-3" id="search_result_containter"></div>
        `;
      default:
        return `
          <p class="fw-bold mt-3">Undefined Page</p>
        `;
    };
  }

  getHtmlCard(result, indexQuestion, indexNote, notescount) {
    let headerString = '';
    let tagsString = '';
    let tagsStringValue = '';
    let titleString = '';
    let bodyString = '';
    let filesString = '';
    let inputFileString = '';
    let footerString = '';
    
    headerString += `
      ${result.id}/${notescount}
      <div class="ms-auto">
        <div class="row align-items-center">
          <div class="col" style="display:none;">
            <a id="search_card_cancel_${indexQuestion}_${indexNote}" style="cursor:pointer;" title="Cancel">
              ${this.back_svg}
            </a>
          </div>
          <div class="col" style="display:none;">
            <a id="search_card_delete_${indexQuestion}_${indexNote}" style="cursor:pointer;" title="Delete">
              ${this.delete_svg}
            </a>
          </div>
          <div class="col" style="display:none;">
            <a id="search_card_save_${indexQuestion}_${indexNote}" style="cursor:pointer;" title="Save">
              ${this.save_svg}
            </a>
          </div>
          <div class="col" style="display:block;">
            <a id="search_card_change_${indexQuestion}_${indexNote}" style="cursor:pointer;" title="Change">
              ${this.change_svg}
            </a>
          </div>
        </div>
      </div>
    `;
    
    for (let i = 0; i < result.tags.length; i++) {
      tagsStringValue += `#${result.tags[i].tag} `;
    };
    tagsString += `
      <h6 id="search_card_label_tag_${indexQuestion}_${indexNote}" class="card-title text-muted" style="display:block;">${tagsStringValue}</h5>
      <div class="form-floating mb-3" style="display:none;">
        <input type="text" class="form-control" id="search_card_input_tag_${indexQuestion}_${indexNote}" placeholder="#" value="${tagsStringValue}">
        <label for="search_card_input_tag_${indexQuestion}_${indexNote}"><a>${this.hash_svg}</a></label>
      </div>
      <div id="search_tags_panel_${indexQuestion}_${indexNote}" class="form-floating mb-3" style="display:none;"></div>
    `;
    
    titleString += `
      <h5 id="search_card_title_${indexQuestion}_${indexNote}" class="card-title" style="display:block;">${result.title}</h5>
      <div class="form-floating mb-3" style="display:none;">
        <input id="search_card_input_title_${indexQuestion}_${indexNote}" type="text" class="form-control" placeholder="Title" value="${result.title}">
        <label for="search_card_input_title_${indexQuestion}_${indexNote}">Title</label>
      </div>
    `;
    
    bodyString += `
      
      <pre id="search_card_body_${indexQuestion}_${indexNote}" class="card-text w-100" style="display:block;white-space:pre-wrap;white-space:-moz-pre-wrap;white-space:-pre-wrap;white-space:-o-pre-wrap;word-wrap:break-word;">${result.body}</pre>
      <div class="form-floating mb-3" style="display:none;">
        <textarea id="search_card_input_body_${indexQuestion}_${indexNote}" class="form-control" placeholder="Body" style="height: 100px">${result.body}</textarea>
        <label for="search_card_input_body_${indexQuestion}_${indexNote}">Body</label>
      </div>
    `;

    for (let i = 0; i < result.files.length; i++) {
      const inputFile = result.files[i];
      const file_id = inputFile.id;
      const file_name = inputFile.filename;
      const file_formatBytes = this.formatBytes(inputFile.size);
      filesString += `
        <hr>
        <div class="row">
          <div class="col-auto me-auto" style="display:block;">
            <div class="row align-items-center">
              <div class="col" style="display:block;">
                <a id="search_card_file_download_${indexQuestion}_${indexNote}_${file_id}" style="cursor:pointer;" title="Download file">
                  ${this.file_download_svg}
                </a>
              </div>
              <div class="col" style="display:none;">
                <span id="search_card_file_spinner_${indexQuestion}_${indexNote}_${file_id}" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
              </div>
              <div class="col" style="display:none;">
                <a id="search_card_file_image_${indexQuestion}_${indexNote}_${file_id}" style="cursor:pointer;" title="View image">
                  ${this.file_image_svg}
                </a>
              </div>
              <div class="col" style="display:none;">
                <a id="search_card_file_binary_${indexQuestion}_${indexNote}_${file_id}" style="cursor:pointer;" title="Binary file">
                  ${this.file_binary_svg}
                </a>
              </div>
              <div class="col" style="display:none;">
                <a id="search_card_file_code_${indexQuestion}_${indexNote}_${file_id}" style="cursor:pointer;" title="View <python language> code">
                  ${this.file_code_svg}
                </a>
              </div>
              <div class="col" style="display:none;">
                <a id="search_card_file_audio_${indexQuestion}_${indexNote}_${file_id}" style="cursor:pointer;" title="Play audio">
                  ${this.file_audio_svg}
                </a>
              </div>
              <div class="col" style="display:none;">
                <a id="search_card_file_video_${indexQuestion}_${indexNote}_${file_id}" style="cursor:pointer;" title="Play video">
                  ${this.file_video_svg}
                </a>
              </div>
              <div class="col" style="display:none;">
                <a id="search_card_file_pdf_${indexQuestion}_${indexNote}_${file_id}" style="cursor:pointer;" title="View pdf">
                  ${this.file_pdf_svg}
                </a>
              </div>
              <div class="col" style="display:none;">
                <a id="search_card_file_txt_${indexQuestion}_${indexNote}_${file_id}" style="cursor:pointer;" title="View text">
                  ${this.file_txt_svg}
                </a>
              </div>
              <div class="col" style="display:none;">
                <a id="search_card_file_word_${indexQuestion}_${indexNote}_${file_id}" style="cursor:pointer;" title="View MSWord file">
                  ${this.file_word_svg}
                </a>
              </div>
              <div class="col" style="display:none;">
                <a id="search_card_file_zip_${indexQuestion}_${indexNote}_${file_id}" style="cursor:pointer;" title="Archive file">
                  ${this.file_zip_svg}
                </a>
              </div>
              <div class="col" style="display:none;">
                <a id="search_card_file_spreadsheet_${indexQuestion}_${indexNote}_${file_id}" style="cursor:pointer;" title="View spreadsheet">
                  ${this.file_spreadsheet_svg}
                </a>
              </div>
              <div class="col" style="display:none;">
                <a id="search_card_file_ppt_${indexQuestion}_${indexNote}_${file_id}" style="cursor:pointer;" title="View presentation">
                  ${this.file_ppt_svg}
                </a>
              </div>
            </div>
          </div>
          <div id="search_card_filename_${indexQuestion}_${indexNote}_${file_id}" class="col" style="display:block;">${file_name} <span class="text-muted">(${file_formatBytes})</span></div>
          <div class="col-auto me-auto" style="display:none;">
            <input id="search_card_input_filename_${indexQuestion}_${indexNote}_${file_id}" type="text" class="form-control" placeholder="Filename" value="${file_name}">
          </div>
          <div class="col-auto">
            <div class="row align-items-center">
              <div class="col" style="display:none;">
                <a id="search_card_file_delete_${indexQuestion}_${indexNote}_${file_id}" style="cursor:pointer;" title="Delete">
                  ${this.delete_svg}
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="row mt-3" style="display:none;">
          <div class="col-auto me-auto">
            <img id="search_card_file_image_content_${indexQuestion}_${indexNote}_${file_id}" class="w-100"/>
          </div>
        </div>
        <div class="row mt-3" style="display:none;">
          <div class="col-auto me-auto">
            <embed id="search_card_file_pdf_content_${indexQuestion}_${indexNote}_${file_id}" class="w-100 vh-100" src=""/>
          </div>
        </div>
        <div class="row mt-3" style="display:none;">
          <div class="col-auto me-auto">
            <iframe id="search_card_file_txt_content_${indexQuestion}_${indexNote}_${file_id}" class="w-100"></iframe>
          </div>
        </div>
        <div class="row mt-3" style="display:none;">
          <div class="col-auto me-auto">
            <pre class="bg-light"><code id="search_card_file_code_content_${indexQuestion}_${indexNote}_${file_id}" class="w-100"></code></pre>
          </div>
        </div>
        <div class="row mt-3" style="display:none;">
          <div class="col-auto me-auto">
            <audio id="search_card_file_audio_content_${indexQuestion}_${indexNote}_${file_id}" class="w-100" controls>
              <source src="">
              Тег audio не поддерживается вашим браузером
            </audio>
          </div>
        </div>
        <div class="row mt-3" style="display:none;">
          <div class="col-auto me-auto">
            <video id="search_card_file_video_content_${indexQuestion}_${indexNote}_${file_id}" class="w-100" controls>
              <source src="">
              Тег video не поддерживается вашим браузером
            </video>
          </div>
        </div>
      `;
    };

    inputFileString += `
      <input type="file" class="form-control mt-3" id="search_card_input_file_${indexQuestion}_${indexNote}" style="display:none;" multiple>
    `;

    return `
      <div class="card mb-3 border-secondary">
        <div class="card-header d-flex text-muted">${headerString}</div>
        <div class="card-body">
          ${tagsString}
          ${titleString}
          ${bodyString}
          ${filesString}
          ${inputFileString}
        </div>
        <div class="card-footer text-muted">
          ${result.datetime}
        </div>
      </div>
    `;
  }
  
  getBase64FromFile(file) {
    return new Promise(resolve=>{
      let reader = new FileReader()
      reader.onload = function(event) {
        let data = event.target.result;
        resolve(data);
      };
      reader.readAsDataURL(file);
    })
  }

  getFileFromBase64(base64, filename) {
    let mime = base64.split(',')[0].match(/:(.*?);/)[1];
    let bstr = atob(base64.split(',')[1]);
    let n = bstr.length;
    let u8arr = new Uint8Array(n);

    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    };

    return new File([u8arr], filename, { type: mime });
  }

  getUniqueArray(array) {
    let seen = {};
    let out = [];
    let j = 0;
    for (let i = 0; i < array.length; i++) {
      let item = array[i];
      if (seen[item] !== 1 && item != '') {
        seen[item] = 1;
        out[j++] = item;
      };
    };
    return out;
  }
  
  fillTagsPanel(panel, panelName, manageInput) {
    fetch(this.url, {
      method: 'POST',
      headers: {'Content-Type': 'application/json;charset=utf-8'},
      body: JSON.stringify({
        method: 'gettag',
        username: this.username,
        md5password: this.md5password
      })
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      const tagsArray = [];
      for (let i = 0; i < data.tags.length; i++) { tagsArray.push(data.tags[i].tag) };
      const tagsCountMap = tagsArray.reduce((acc, i) => {
        if (acc.hasOwnProperty(i)) {
          acc[i] += 1;
        } else {
          acc[i] = 1;
        };
        return acc;
      },{});
      let tagsString = '';
      let tagMapCounter = 0;
      for (let tag in tagsCountMap) {
        const tagColor = this.color[tagMapCounter%this.color.length];
        let tagTextDarkString = '';
        if (tagMapCounter%this.color.length == 4 || tagMapCounter%this.color.length == 5) {
          tagTextDarkString = 'text-dark';
        };
        tagsString += `
          <a id="${panelName}_tag_in_panel_${tag}" style="cursor:pointer;">
            <span class="badge bg-${tagColor} ${tagTextDarkString}">
              #${tag}&emsp;
                <span class="badge bg-light text-dark">
                  ${tagsCountMap[tag]}
                </span>
            </span>
          </a>
        `;
        tagMapCounter++;
      };
      panel.innerHTML = tagsString;
      for (let tag in tagsCountMap) {
        document.getElementById(`${panelName}_tag_in_panel_${tag}`)
        .addEventListener('click', function (event) {
          if (this.isLogin) {
          	manageInput.value += ` #${tag} `;
          };
        }.bind(this));
      };
    });
  }

  noneBlock(button, content) {
  	button.addEventListener('click', function() {
  	  if (!this.isLogin) {return};
      if (content.style.display == "block") {
        content.style.display = "none";
        return;
      };
      if (content.style.display == "none") {
        content.style.display = "block";
        return;
      };
    }.bind(this));
  }

  deleteFile(fileId, searchInput, searchInputOldValue, searchButtonSearchForNote) {
  	fetch(this.url, {
      method: 'POST',
      headers: {'Content-Type': 'application/json;charset=utf-8'},
      body: JSON.stringify({
        method: 'deletefile',
        username: this.username,
        md5password: this.md5password,
        file_id: fileId
      })
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      //if (data.deleteFile == 0) return;
      searchInput.value = searchInputOldValue;
      searchButtonSearchForNote.click();
    });
  }

  handle() {

  	// LOGIN
    const msIcon = document.getElementById('msIcon');
    const searchIcon = document.getElementById('searchIcon');
    const loginInputUsername = document.getElementById('login_input_username');
    const loginInputPassword = document.getElementById('login_input_password');
    const loginButton = document.getElementById('login_button');
    const loginSpinner = document.getElementById('login_spinner');
    loginButton.addEventListener('click', async function(event) {
      event.preventDefault();
      loginInputUsername.disabled = true;
      loginInputPassword.disabled = true;
      loginButton.disabled = true;
      loginSpinner.style.display = "block";
      this.username = loginInputUsername.value;
      this.md5password = this.MD5(unescape(encodeURIComponent(loginInputPassword.value)));
      fetch(this.url, {
        method: 'POST',
        headers: {'Content-Type': 'application/json;charset=utf-8'},
        body: JSON.stringify({
          method: 'login',
          username: this.username,
          md5password: this.md5password
          })
        })
        .then(response => response.json())
        .then(data => {
          console.log(data);
          if (data.exception != undefined) {
          	alert(`======================================\nERROR:\n${data.exception}\n======================================\nMemory Speak`);
          } else {
            this.isLogin = true;
            msIcon.click();
          };
          loginSpinner.style.display = "none";
          loginInputUsername.disabled = false;
          loginInputPassword.disabled = false;
          loginButton.disabled = false;
        });
    }.bind(this));

    // NEW NOTE
    msIcon.addEventListener('click', function() {
      if (!this.isLogin) {return};
      this.page = "new";
      this.content.innerHTML = this.getHtmlFromPage();
      const newButtonCreateANewNote = document.getElementById('new_button_create_a_new_note');
      const newSpinner = document.getElementById('new_spinner');
      const newInputTag = document.getElementById('new_input_tag');
      const newInputTagClearButton = document.getElementById('new_input_tag_clear_button');
      const newTagsPanel = document.getElementById('new_tags_panel');
      const newInputTitle = document.getElementById('new_input_title');
      const newInputTitleClearButton = document.getElementById('new_input_title_clear_button');
      const newInputBody = document.getElementById('new_input_body');
      const newInputBodyClearButton = document.getElementById('new_input_body_clear_button');
      const newInputFile = document.getElementById('new_input_file');
      newButtonCreateANewNote.addEventListener('click', async function(event) {
        event.preventDefault();
        this.isLogin = false;
        newButtonCreateANewNote.disabled = true;
        newInputTag.disabled = true;
        newInputTitle.disabled = true;
        newInputBody.disabled = true;
        newInputFile.disabled = true;
        newSpinner.style.display = "block";
        let tags = newInputTag.value.split("#");
        for (let i = 0; i < tags.length; i++) {
          tags[i] = tags[i].trim();
        };
        tags = this.getUniqueArray(tags);
        let files = [];
        for (let i = 0; i < newInputFile.files.length; i++) {
          const inputFile = newInputFile.files[i];
          let file = {};
          file.base64 = await this.getBase64FromFile(inputFile);
          file.filename = inputFile.name;
          file.size = inputFile.size;
          file.type = inputFile.type;
          file.extention = this.getExtention(inputFile.name);
          files.push(file);
        };
        if (newInputTitle.value == '') {
          this.isLogin = true;
          newButtonCreateANewNote.disabled = false;
          newInputTag.disabled = false;
          newInputTitle.disabled = false;
          newInputBody.disabled = false;
          newInputFile.disabled = false;
          newInputTitle.focus();
          newSpinner.style.display = "none";
          return;
        };
        if (newInputBody.value == '') {
          this.isLogin = true;
          newButtonCreateANewNote.disabled = false;
          newInputTag.disabled = false;
          newInputTitle.disabled = false;
          newInputBody.disabled = false;
          newInputFile.disabled = false;
          newInputBody.focus();
          newSpinner.style.display = "none";
          return;
        };
        fetch(this.url, {
          method: 'POST',
          headers: {'Content-Type': 'application/json;charset=utf-8'},
          body: JSON.stringify({
            method: 'setnote',
            username: this.username,
            md5password: this.md5password,
            tag: tags,
            title: newInputTitle.value,
            body: newInputBody.value,
            files: files
          })
        })
        .then(response => response.json())
        .then(data => {
          console.log(data);
          this.fillTagsPanel(newTagsPanel, "new", newInputTag);
          this.isLogin = true;
          newButtonCreateANewNote.disabled = false;
          newInputTag.disabled = false;
          newInputTitle.disabled = false;
          newInputBody.disabled = false;
          newInputFile.disabled = false;
          newSpinner.style.display = "none";
          if (data.exception != undefined) {
          	if (data.exception == "SQLSTATE[08S01]: Communication link failure: 1153 Got a packet bigger than 'max_allowed_packet' bytes") {
          	  alert(`The note has been added to the database.\n======================================\nERROR:\n!!! The file has not been uploaded !!!\n!!! Size more than 12MB !!!\n======================================\nMemory Speak`);
          	  return;
          	};
          	if (data.exception == `SQLSTATE[23000]: Integrity constraint violation: 1062 Duplicate entry '${newInputTitle.value}' for key 'title'`) {
          	  alert(`======================================\nERROR:\nDuplicate value '${newInputTitle.value}'\nfor input field 'title'\n======================================\nMemory Speak`);
          	  return;
          	};
          	alert(`======================================\nERROR:\n${data.exception}\n======================================\nMemory Speak`);
          } else {
          	alert(`The note has been added to the database.\n======================================\nMemory Speak`);
          };
        });
      }.bind(this));

      this.newInputTagClearButtonOnMouseOver = false;
      this.newInputTagButtonOnFocus = false;
      newInputTagClearButton.addEventListener('click', function() {
      	newInputTag.value = '';
      }.bind(this));
      newInputTagClearButton.addEventListener('mouseover', function() {
      	this.newInputTagClearButtonOnMouseOver = true;
      }.bind(this));
      newInputTagClearButton.addEventListener('mouseout', function() {
      	this.newInputTagClearButtonOnMouseOver = false;
      	if (this.newInputTagClearButtonOnFocus) return;
      	newInputTagClearButton.style.display = "none";
      }.bind(this));
      newInputTag.addEventListener('focus', function() {
      	this.newInputTagClearButtonOnFocus = true;
      	newInputTagClearButton.style.display = "block";
      }.bind(this));
      newInputTag.addEventListener('blur', function(event) {
      	this.newInputTagClearButtonOnFocus = false;
      	if (this.newInputTagClearButtonOnMouseOver) return;
      	newInputTagClearButton.style.display = "none";
      }.bind(this));

      this.newInputTitleClearButtonOnMouseOver = false;
      this.newInputTitleClearButtonOnFocus = false;
      newInputTitleClearButton.addEventListener('click', function() {
      	newInputTitle.value = '';
      }.bind(this));
      newInputTitleClearButton.addEventListener('mouseover', function() {
      	this.newInputTitleClearButtonOnMouseOver = true;
      }.bind(this));
      newInputTitleClearButton.addEventListener('mouseout', function() {
      	this.newInputTitleClearButtonOnMouseOver = false;
      	if (this.newInputTitleClearButtonOnFocus) return;
      	newInputTitleClearButton.style.display = "none";
      }.bind(this));
      newInputTitle.addEventListener('focus', function() {
      	this.newInputTitleClearButtonOnFocus = true;
      	newInputTitleClearButton.style.display = "block";
      }.bind(this));
      newInputTitle.addEventListener('blur', function(event) {
      	this.newInputTitleClearButtonOnFocus = false;
      	if (this.newInputTitleClearButtonOnMouseOver) return;
      	newInputTitleClearButton.style.display = "none";
      }.bind(this));

      this.newInputBodyClearButtonOnMouseOver = false;
      this.newInputBodyClearButtonOnFocus = false;
      newInputBodyClearButton.addEventListener('click', function() {
      	newInputBody.value = '';
      }.bind(this));
      newInputBodyClearButton.addEventListener('mouseover', function() {
      	this.newInputBodyClearButtonOnMouseOver = true;
      }.bind(this));
      newInputBodyClearButton.addEventListener('mouseout', function() {
      	this.newInputBodyClearButtonOnMouseOver = false;
      	if (this.newInputBodyClearButtonOnFocus) return;
      	newInputBodyClearButton.style.display = "none";
      }.bind(this));
      newInputBody.addEventListener('focus', function() {
      	this.newInputBodyClearButtonOnFocus = true;
      	newInputBodyClearButton.style.display = "block";
      }.bind(this));
      newInputBody.addEventListener('blur', function(event) {
      	this.newInputBodyClearButtonOnFocus = false;
      	if (this.newInputBodyClearButtonOnMouseOver) return;
      	newInputBodyClearButton.style.display = "none";
      }.bind(this));

      newInputFile.addEventListener('focus', function() {
      	newInputFile.value = '';
      }.bind(this));

      this.fillTagsPanel(newTagsPanel, "new", newInputTag);
    }.bind(this));

    // SEARCH
    searchIcon.addEventListener('click', function() {
      if (!this.isLogin) {return};
      this.page = "search";
      this.content.innerHTML = this.getHtmlFromPage();
      const searchButtonSearchForNote = document.getElementById('search_button_search_for_note');
      const searchSpinner = document.getElementById('search_spinner');
      const searchInput = document.getElementById('search_input');
      const searchInputClearButton = document.getElementById('search_input_clear_button');
      const searchTagsPanel = document.getElementById('search_tags_panel');
      const searchResultContainter = document.getElementById('search_result_containter');
      searchButtonSearchForNote.addEventListener('click', async function(event) {
      	event.preventDefault();
      	this.isLogin = false;
      	const searchInputOldValue = searchInput.value;
      	searchButtonSearchForNote.disabled = true;
      	searchInput.disabled = true;
      	searchSpinner.style.display = "block";
      	let searchString = searchInput.value;
      	searchString = searchString.trim();
      	if (searchString == '') {
      	  this.isLogin = true;
      	  searchButtonSearchForNote.disabled = false;
      	  searchInput.disabled = false;
      	  searchInput.value = "";
      	  searchInput.focus();
      	  searchSpinner.style.display = "none";
      	  return;
      	};
      	let searchArray = searchString.split('*');
      	let searchArrayLength = searchArray.length;
      	let search = [];
      	for (let indexOfSearchArray = 0; indexOfSearchArray < searchArrayLength; indexOfSearchArray++) {
          let questionString = searchArray[indexOfSearchArray];
          questionString = questionString.trim();
          let questionArray = questionString.split('+');
          let questionArrayLength = questionArray.length;
          let question = {tags: [], queries: []};
          for (let indexOfQuestionArray = 0; indexOfQuestionArray < questionArrayLength; indexOfQuestionArray++) {
            let tagQueryString = questionArray[indexOfQuestionArray];
            tagQueryString = tagQueryString.trim();
            let tagQueryArray = tagQueryString.split('#');
            let query = tagQueryArray.shift();
            query = query.trim();
            if (query != "") {
              question.queries.push(query);
            };
            let tagQueryArrayLength = tagQueryArray.length;
            for (let indexOfTagQueryArray = 0; indexOfTagQueryArray < tagQueryArrayLength; indexOfTagQueryArray++) {
              let tag = tagQueryArray[indexOfTagQueryArray];
              tag = tag.trim();
              if (tag != "") {
                question.tags.push(tag);
              };
            };
          };
          if (question.tags.length != 0 || question.queries.length != 0) {
            question.tags = this.getUniqueArray(question.tags);
            question.queries = this.getUniqueArray(question.queries);
            search.push(question);
          };
      	};
        fetch(this.url, {
          method: 'POST',
          headers: {'Content-Type': 'application/json;charset=utf-8'},
          body: JSON.stringify({
            method: 'getnote',
            username: this.username,
            md5password: this.md5password,
            search: search
          })
        })
        .then(response => response.json())
        .then(data => {
          console.log(data);
          searchResultContainter.innerHTML = '';
          for (let indexQuestionResult = 0; indexQuestionResult < data.result.length; indexQuestionResult++) {
            for (let indexResult = 0; indexResult < data.result[indexQuestionResult].length; indexResult++) {
              searchResultContainter.innerHTML += this.getHtmlCard(data.result[indexQuestionResult][indexResult], indexQuestionResult, indexResult, data.notescount);
            };
          };
          for (let indexQuestionResult = 0; indexQuestionResult < data.result.length; indexQuestionResult++) {
            for (let indexResult = 0; indexResult < data.result[indexQuestionResult].length; indexResult++) {
              const cancelButton = document.getElementById(`search_card_cancel_${indexQuestionResult}_${indexResult}`);
              const deleteButton = document.getElementById(`search_card_delete_${indexQuestionResult}_${indexResult}`);
              const saveButton = document.getElementById(`search_card_save_${indexQuestionResult}_${indexResult}`);
              const changeButton = document.getElementById(`search_card_change_${indexQuestionResult}_${indexResult}`);
              const cancelDiv = cancelButton.parentNode;
              const deleteDiv = deleteButton.parentNode;
              const saveDiv = saveButton.parentNode;
              const changeDiv = changeButton.parentNode;
              const tagsLabel = document.getElementById(`search_card_label_tag_${indexQuestionResult}_${indexResult}`);
              const tagsInput = document.getElementById(`search_card_input_tag_${indexQuestionResult}_${indexResult}`);
              const tagsLabelOldValue = tagsLabel.innerHTML;
              const tagsPanel = document.getElementById(`search_tags_panel_${indexQuestionResult}_${indexResult}`);
              const titleElement = document.getElementById(`search_card_title_${indexQuestionResult}_${indexResult}`);
              const titleOldValue = titleElement.innerHTML;
              const inputTitle = document.getElementById(`search_card_input_title_${indexQuestionResult}_${indexResult}`);
              const bodyElement = document.getElementById(`search_card_body_${indexQuestionResult}_${indexResult}`);
              const bodyOldValue = bodyElement.innerHTML;
              const inputBody = document.getElementById(`search_card_input_body_${indexQuestionResult}_${indexResult}`);
              const inputFile = document.getElementById(`search_card_input_file_${indexQuestionResult}_${indexResult}`);

              let downloadFileButtons = [];
              let spinnerFiles = [];
              let imageFileButtons = [];
              let imageContents = [];
              let binaryFileButtons = [];
              let codeFileButtons = [];
              let codeContents = [];
              let audioFileButtons = [];
              let audioContents = [];
              let videoFileButtons = [];
              let videoContents = [];
              let pdfFileButtons = [];
              let pdfContents = [];
              let txtFileButtons = [];
              let txtContents = [];
              let wordFileButtons = [];
              let zipFileButtons = [];
              let spreadsheetFileButtons = [];
              let pptFileButtons = [];
              let buttonDivs = [];
              let filenameLabels = [];
              let filenameLabelOldValues = [];
              let inputFilenames = [];
              let deleteFileButtons = [];
              for (let indexFile = 0; indexFile < data.result[indexQuestionResult][indexResult].files.length; indexFile++) {
              	const downloadFileButton = document.getElementById(`search_card_file_download_${indexQuestionResult}_${indexResult}_${data.result[indexQuestionResult][indexResult].files[indexFile].id}`);
              	downloadFileButtons.push(downloadFileButton);
              	const spinnerFile = document.getElementById(`search_card_file_spinner_${indexQuestionResult}_${indexResult}_${data.result[indexQuestionResult][indexResult].files[indexFile].id}`);
              	spinnerFiles.push(spinnerFile);
              	const imageFileButton = document.getElementById(`search_card_file_image_${indexQuestionResult}_${indexResult}_${data.result[indexQuestionResult][indexResult].files[indexFile].id}`);
              	imageFileButtons.push(imageFileButton);
              	const imageContent = document.getElementById(`search_card_file_image_content_${indexQuestionResult}_${indexResult}_${data.result[indexQuestionResult][indexResult].files[indexFile].id}`);
              	imageContents.push(imageContent);
              	const binaryFileButton = document.getElementById(`search_card_file_binary_${indexQuestionResult}_${indexResult}_${data.result[indexQuestionResult][indexResult].files[indexFile].id}`);
              	binaryFileButtons.push(binaryFileButton);
              	const codeFileButton = document.getElementById(`search_card_file_code_${indexQuestionResult}_${indexResult}_${data.result[indexQuestionResult][indexResult].files[indexFile].id}`);
              	codeFileButtons.push(codeFileButton);
              	const codeContent = document.getElementById(`search_card_file_code_content_${indexQuestionResult}_${indexResult}_${data.result[indexQuestionResult][indexResult].files[indexFile].id}`);
              	codeContents.push(codeContent);
              	const audioFileButton = document.getElementById(`search_card_file_audio_${indexQuestionResult}_${indexResult}_${data.result[indexQuestionResult][indexResult].files[indexFile].id}`);
              	audioFileButtons.push(audioFileButton);
              	const audioContent = document.getElementById(`search_card_file_audio_content_${indexQuestionResult}_${indexResult}_${data.result[indexQuestionResult][indexResult].files[indexFile].id}`);
              	audioContents.push(audioContent);
              	const videoFileButton = document.getElementById(`search_card_file_video_${indexQuestionResult}_${indexResult}_${data.result[indexQuestionResult][indexResult].files[indexFile].id}`);
              	videoFileButtons.push(videoFileButton);
              	const videoContent = document.getElementById(`search_card_file_video_content_${indexQuestionResult}_${indexResult}_${data.result[indexQuestionResult][indexResult].files[indexFile].id}`);
              	videoContents.push(videoContent);
              	const pdfFileButton = document.getElementById(`search_card_file_pdf_${indexQuestionResult}_${indexResult}_${data.result[indexQuestionResult][indexResult].files[indexFile].id}`);
              	pdfFileButtons.push(pdfFileButton);
              	const pdfContent = document.getElementById(`search_card_file_pdf_content_${indexQuestionResult}_${indexResult}_${data.result[indexQuestionResult][indexResult].files[indexFile].id}`);
              	pdfContents.push(pdfContent);
              	const txtFileButton = document.getElementById(`search_card_file_txt_${indexQuestionResult}_${indexResult}_${data.result[indexQuestionResult][indexResult].files[indexFile].id}`);
              	txtFileButtons.push(txtFileButton);
              	const txtContent = document.getElementById(`search_card_file_txt_content_${indexQuestionResult}_${indexResult}_${data.result[indexQuestionResult][indexResult].files[indexFile].id}`);
              	txtContents.push(txtContent);
              	const wordFileButton = document.getElementById(`search_card_file_word_${indexQuestionResult}_${indexResult}_${data.result[indexQuestionResult][indexResult].files[indexFile].id}`);
              	wordFileButtons.push(wordFileButton);
              	const zipFileButton = document.getElementById(`search_card_file_zip_${indexQuestionResult}_${indexResult}_${data.result[indexQuestionResult][indexResult].files[indexFile].id}`);
              	zipFileButtons.push(zipFileButton);
              	const spreadsheetFileButton = document.getElementById(`search_card_file_spreadsheet_${indexQuestionResult}_${indexResult}_${data.result[indexQuestionResult][indexResult].files[indexFile].id}`);
              	spreadsheetFileButtons.push(spreadsheetFileButton);
              	const pptFileButton = document.getElementById(`search_card_file_ppt_${indexQuestionResult}_${indexResult}_${data.result[indexQuestionResult][indexResult].files[indexFile].id}`);
              	pptFileButtons.push(pptFileButton);
              	const buttonDiv = downloadFileButton.parentNode.parentNode.parentNode;
              	buttonDivs.push(buttonDiv);
              	const filenameLabel = document.getElementById(`search_card_filename_${indexQuestionResult}_${indexResult}_${data.result[indexQuestionResult][indexResult].files[indexFile].id}`);
              	filenameLabels.push(filenameLabel);
              	const filenameLabelOldValue = filenameLabel.innerHTML;
              	filenameLabelOldValues.push(filenameLabelOldValue);
              	const inputFilename = document.getElementById(`search_card_input_filename_${indexQuestionResult}_${indexResult}_${data.result[indexQuestionResult][indexResult].files[indexFile].id}`)
              	inputFilenames.push(inputFilename);
              	const deleteFileButton = document.getElementById(`search_card_file_delete_${indexQuestionResult}_${indexResult}_${data.result[indexQuestionResult][indexResult].files[indexFile].id}`);
              	deleteFileButtons.push(deleteFileButton);
              };

              for (let indexFile = 0; indexFile < data.result[indexQuestionResult][indexResult].files.length; indexFile++) {
              	const fileId = data.result[indexQuestionResult][indexResult].files[indexFile].id;
              	const fileName = data.result[indexQuestionResult][indexResult].files[indexFile].filename;
              	const fileType = data.result[indexQuestionResult][indexResult].files[indexFile].type;
              	const fileExtention = data.result[indexQuestionResult][indexResult].files[indexFile].extention;
              	const fileSize = data.result[indexQuestionResult][indexResult].files[indexFile].size;
              	const fileSizeFormatBytes = this.formatBytes(fileSize);
              	const notesId = data.result[indexQuestionResult][indexResult].id;
              	downloadFileButtons[indexFile].addEventListener('click', async function() {
              	  if (!this.isLogin) {return};
              	  downloadFileButtons[indexFile].parentNode.style.display = "none";
              	  spinnerFiles[indexFile].parentNode.style.display = "block";
              	  fetch(this.url, {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json;charset=utf-8'},
                    body: JSON.stringify({
                      method: 'getjsonsizefile',
                      username: this.username,
                      md5password: this.md5password,
                      file_id: fileId,
                      notes_id: notesId
                    })
                  })
                  .then(response => response.json())
                  .then(async function(data) {
                  	const jsonSize = data.json_size;
                  	fetch(this.url, {
                  	  method: 'POST',
                      headers: {'Content-Type': 'application/json;charset=utf-8'},
                      body: JSON.stringify({
                        method: 'getfile',
                        username: this.username,
                        md5password: this.md5password,
                        file_id: fileId,
                        notes_id: notesId
                      })
                  	}).
                  	then(async function(response) {
                  	  const reader = response.body.getReader();
                  	  const contentLength = jsonSize;
                  	  let receivedLength = 0;
                  	  let chunks = [];
                  	  while (true) {
                  	    const {done, value} = await reader.read();
                  	    if (done) break;
                  	    chunks.push(value);
                  	    receivedLength += value.length;
                  	    filenameLabels[indexFile].innerHTML = `${fileName} <span class="text-muted">(${this.formatBytes(receivedLength*fileSize/contentLength)})</span>`;
                  	  };
                  	  let chunksAll = new Uint8Array(receivedLength);
                  	  let position = 0;
                  	  for (let chunk of chunks) {
                  	  	chunksAll.set(chunk, position);
                  	  	position += chunk.length;
                  	  };
                  	  let result = new TextDecoder("utf-8").decode(chunksAll);
                  	  let resultBase64 = JSON.parse(result).base64;
                  	  let resultType = resultBase64.split(';')[0].split(':')[1];
                  	  spinnerFiles[indexFile].parentNode.style.display = "none";
                  	  if (
                  	  	(resultType == 'image/bmp' && fileType == 'image/bmp' && fileExtention == 'bmp') ||
                  	  	(resultType == 'image/png' && fileType == 'image/png' && fileExtention == 'png') ||
                  	  	(resultType == 'image/x-icon' && fileType == 'image/x-icon' && fileExtention == 'ico') ||
                  	  	(resultType == 'image/jpeg' && fileType == 'image/jpeg' && (fileExtention == 'jpeg' || fileExtention == 'jpg')) ||
                  	  	(resultType == 'image/svg+xml' && fileType == 'image/svg+xml' && fileExtention == 'svg')
                  	  ) {
                  	  	imageFileButtons[indexFile].parentNode.style.display = "block";
                  	  	filenameLabels[indexFile].innerHTML = `<a href="${resultBase64}" download="${fileName}">${fileName}</a><span class="text-muted"> (${fileSizeFormatBytes})</span>`;
                  	  	imageContents[indexFile].src = resultBase64;
                  	  	imageContents[indexFile].alt = fileName;
                  	  	this.noneBlock(imageFileButtons[indexFile], imageContents[indexFile].parentNode.parentNode);
                  	  	return;
                  	  };
                  	  if (resultType == 'application/pdf' && fileType == 'application/pdf' && fileExtention == 'pdf') {
                  	  	pdfFileButtons[indexFile].parentNode.style.display = "block";
                  	  	filenameLabels[indexFile].innerHTML = `<a href="${resultBase64}" download="${fileName}">${fileName}</a><span class="text-muted"> (${fileSizeFormatBytes})</span>`;
                  	  	pdfContents[indexFile].src = resultBase64;
                  	  	this.noneBlock(pdfFileButtons[indexFile], pdfContents[indexFile].parentNode.parentNode);
                  	  	return;
                  	  };
                  	  if (resultType == 'text/plain' && fileType == 'text/plain' && fileExtention == 'txt') {
                  	  	txtFileButtons[indexFile].parentNode.style.display = "block";
                  	  	filenameLabels[indexFile].innerHTML = `<a href="${resultBase64}" download="${fileName}">${fileName}</a><span class="text-muted"> (${fileSizeFormatBytes})</span>`;
                  	  	txtContents[indexFile].src = resultBase64;
                  	  	this.noneBlock(txtFileButtons[indexFile], txtContents[indexFile].parentNode.parentNode);
                  	  	return;
                  	  };
                  	  if (
                  	  	(resultType == 'audio/wav' && fileType == 'audio/wav' && fileExtention == 'wav') ||
                  	  	(resultType == 'audio/mpeg' && fileType == 'audio/mpeg' && fileExtention == 'mp3')
                  	  ) {
                  	  	audioFileButtons[indexFile].parentNode.style.display = "block";
                  	  	filenameLabels[indexFile].innerHTML = `<a href="${resultBase64}" download="${fileName}">${fileName}</a><span class="text-muted"> (${fileSizeFormatBytes})</span>`;
                  	  	audioContents[indexFile].type = resultType;
                  	  	audioContents[indexFile].src = resultBase64;
                  	  	this.noneBlock(audioFileButtons[indexFile], audioContents[indexFile].parentNode.parentNode);
                  	  	return;
                  	  };
                  	  if (resultType == 'video/mp4' && fileType == 'video/mp4' && fileExtention == 'mp4') {
                  	  	videoFileButtons[indexFile].parentNode.style.display = "block";
                  	  	filenameLabels[indexFile].innerHTML = `<a href="${resultBase64}" download="${fileName}">${fileName}</a><span class="text-muted"> (${fileSizeFormatBytes})</span>`;
                  	  	videoContents[indexFile].type = resultType;
                  	  	videoContents[indexFile].src = resultBase64;
                  	  	this.noneBlock(videoFileButtons[indexFile], videoContents[indexFile].parentNode.parentNode);
                  	  	return;
                  	  };
                  	  if (
                  	  	(resultType == 'application/vnd.oasis.opendocument.text' && fileType == 'application/vnd.oasis.opendocument.text') || 
                  	  	(resultType == 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' && fileType == 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') ||
                  	  	(resultType == 'application/msword' && fileType == 'application/msword')
                  	  ) {
                  	  	wordFileButtons[indexFile].parentNode.style.display = "block";
                  	  	filenameLabels[indexFile].innerHTML = `<a href="${resultBase64}" download="${fileName}">${fileName}</a><span class="text-muted"> (${fileSizeFormatBytes})</span>`;
                  	  	return;
                  	  };
                  	  if (resultType == 'application/vnd.ms-powerpoint' && fileType == 'application/vnd.ms-powerpoint' && fileExtention == 'ppt') {
                  	  	pptFileButtons[indexFile].parentNode.style.display = "block";
                  	  	filenameLabels[indexFile].innerHTML = `<a href="${resultBase64}" download="${fileName}">${fileName}</a><span class="text-muted"> (${fileSizeFormatBytes})</span>`;
                  	  	return;
                  	  };
                  	  if (resultType == 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' && fileType == 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' && fileExtention == 'xlsx') {
                  	  	spreadsheetFileButtons[indexFile].parentNode.style.display = "block";
                  	  	filenameLabels[indexFile].innerHTML = `<a href="${resultBase64}" download="${fileName}">${fileName}</a><span class="text-muted"> (${fileSizeFormatBytes})</span>`;
                  	  	return;
                  	  };
                  	  if (resultType == 'application/x-zip-compressed' && fileType == 'application/x-zip-compressed' && fileExtention == 'zip') {
                  	  	zipFileButtons[indexFile].parentNode.style.display = "block";
                  	  	filenameLabels[indexFile].innerHTML = `<a href="${resultBase64}" download="${fileName}">${fileName}</a><span class="text-muted"> (${fileSizeFormatBytes})</span>`;
                  	  	return;
                  	  };
                  	  if (
                  	  	fileExtention == 'py' ||
                  	  	fileExtention == 'php' ||
                  	  	fileExtention == 'java' ||
                  	  	fileExtention == 'kt' ||
                  	  	fileExtention == 'rs' ||
                  	  	fileExtention == 'js' ||
                  	  	fileExtention == 'json' ||
                  	  	fileExtention == 'css' ||
                  	  	fileExtention == 'c' ||
                  	  	fileExtention == 'cpp' ||
                  	  	fileExtention == 'inf' ||
                  	  	fileExtention == 'map' ||
                  	  	fileExtention == 'xml' ||
                  	  	fileExtention == 'gradle' ||
                  	  	fileExtention == 'properties' ||
                  	  	fileExtention == 'bat' ||
                  	  	fileExtention == 'html' ||
                  	  	fileExtention == 'h' ||
                  	  	fileExtention == 'MF' ||
                  	  	fileExtention == 'md5' ||
                  	  	fileExtention == 'cmd' ||
                  	  	fileExtention == 'ps1' ||
                  	  	fileExtention == 'webmanifest' ||
                  	  	fileExtention == 'asmx' ||
                  	  	fileExtention == 'asp' ||
                  	  	fileExtention == 'htm' ||
                  	  	fileExtention == 'hta' ||
                  	  	fileExtention.length === 0
                  	  ) {
                  	  	codeFileButtons[indexFile].parentNode.style.display = "block";
                  	  	filenameLabels[indexFile].innerHTML = `<a href="${resultBase64}" download="${fileName}">${fileName}</a><span class="text-muted"> (${fileSizeFormatBytes})</span>`;
                  	  	const file = this.getFileFromBase64(resultBase64, fileName);
                  	  	let fileReader = new FileReader();
                  	  	fileReader.readAsText(file);
                  	  	fileReader.onload = function() {
                  	  	  codeContents[indexFile].innerHTML = Prism.highlight(fileReader.result, Prism.languages.python, 'python');
                  	  	};
         
                  	  	this.noneBlock(codeFileButtons[indexFile], codeContents[indexFile].parentNode.parentNode.parentNode);
                  	  	return;
                  	  };
                  	  binaryFileButtons[indexFile].parentNode.style.display = "block";
                  	  filenameLabels[indexFile].innerHTML = `<a href="${resultBase64}" download="${fileName}">${fileName}</a><span class="text-muted"> (${fileSizeFormatBytes})</span>`;
                  	}.bind(this));
                  }.bind(this));
              	}.bind(this));
                deleteFileButtons[indexFile].addEventListener('click', async function() {
                	if (!this.isLogin) return;
                	let confirmDelete = confirm(`Delete file: ${fileName} from note: ${titleOldValue}?\n======================================\nMemory Speak`);
                	if (!confirmDelete) return;
                	this.deleteFile(fileId, searchInput, searchInputOldValue, searchButtonSearchForNote);
                	this.fillTagsPanel(searchTagsPanel, "search", searchInput);
                }.bind(this));
              };

              cancelButton.addEventListener('click', function (event) {
              	if (!this.isLogin) {return};
                cancelDiv.style.display = "none";
                deleteDiv.style.display = "none";
                saveDiv.style.display = "none";
                changeDiv.style.display = "block";
                
                tagsInput.parentNode.style.display = "none";
                tagsPanel.style.display = "none";
                tagsLabel.style.display = "block";
                
                inputTitle.parentNode.style.display = "none";
                titleElement.style.display = "block";
                
                inputBody.parentNode.style.display = "none";
                bodyElement.style.display = "block";

                for (let indexFile = 0; indexFile < data.result[indexQuestionResult][indexResult].files.length; indexFile++) {
                  filenameLabels[indexFile].style.display = "block";
                  buttonDivs[indexFile].style.display = "block";
                  inputFilenames[indexFile].parentNode.style.display = "none";
                  deleteFileButtons[indexFile].parentNode.style.display = "none";
                };

                inputFile.style.display = 'none';
              }.bind(this));
              
              deleteButton.addEventListener('click', function (event) {
              	if (!this.isLogin) return;
                let confirmDelete = confirm(`Delete note: ${titleOldValue}?\n======================================\nMemory Speak`);
                if (!confirmDelete) return;
                this.isLogin = false;
                fetch(this.url, {
                	method: 'POST',
                	headers: {'Content-Type': 'application/json;charset=utf-8'},
                	body: JSON.stringify({
                		method: 'deletenote',
                		username: this.username,
                		md5password: this.md5password,
                		notes_id: data.result[indexQuestionResult][indexResult].id
                	})
                })
                .then(response => response.json())
                .then(data => {
                	this.isLogin = true;
                	console.log(data);
                	//if (data.deleteCountNotes == 0) return;
                	searchInput.value = searchInputOldValue;
                	searchButtonSearchForNote.click();
                	this.fillTagsPanel(searchTagsPanel, "search", searchInput);
                });
              }.bind(this));
              
              saveButton.addEventListener('click', async function (event) {
              	if (!this.isLogin) return;
              	let confirmSave = confirm(`Save note: ${titleOldValue}?\n======================================\nMemory Speak`);
                if (!confirmSave) return;
                this.isLogin = false;
                let newTags = tagsInput.value.split("#");
                for (let i = 0; i < newTags.length; i++) {
                	newTags[i] = newTags[i].trim();
                };
                newTags = this.getUniqueArray(newTags);
                let newFiles = [];
                for (let indexFile = 0; indexFile < data.result[indexQuestionResult][indexResult].files.length; indexFile++) {
                	const newFileId = data.result[indexQuestionResult][indexResult].files[indexFile].id;
                	const newFileName = inputFilenames[indexFile].value;
                	const newFileExtention = this.getExtention(newFileName);
                	let file = {};
                	file.id = data.result[indexQuestionResult][indexResult].files[indexFile].id;
                	file.filename = inputFilenames[indexFile].value;
                	file.extention = this.getExtention(newFileName);
                	newFiles.push(file);
                };
                for (let i = 0; i < inputFile.files.length; i++) {
                	const newInputFile = inputFile.files[i];
                	let file = {};
                	file.base64 = await this.getBase64FromFile(newInputFile);
                	file.filename = newInputFile.name;
                	file.size = newInputFile.size;
                	file.type = newInputFile.type;
                	file.extention = this.getExtention(newInputFile.name);
                	newFiles.push(file);
                };
                fetch(this.url, {
                	method: 'POST',
                	headers: {'Content-Type': 'application/json;charset=utf-8'},
                	body: JSON.stringify({
                		method: 'changenote',
                		username: this.username,
                		md5password: this.md5password,
                		notes_id: data.result[indexQuestionResult][indexResult].id,
                		tag: newTags,
                		title: inputTitle.value,
                		body: inputBody.value,
                		files: newFiles
                	})
                })
                .then(response => response.json())
                .then(data => {
                	this.isLogin = true;
                	console.log(data);
                	//if (data.updateCountNotes == 0) return;
                	searchInput.value = searchInputOldValue;
                	searchButtonSearchForNote.click();
                	this.fillTagsPanel(searchTagsPanel, "search", searchInput);
                });
              }.bind(this));
              
              changeButton.addEventListener('click', function (event) {
              	if (!this.isLogin) return;

                cancelDiv.style.display = "block";
                deleteDiv.style.display = "block";
                saveDiv.style.display = "block";
                changeDiv.style.display = "none";
                
                tagsLabel.style.display = "none";
                tagsInput.value = tagsLabelOldValue;
                tagsInput.parentNode.style.display = "block";
                tagsPanel.style.display = "block";
                this.fillTagsPanel(tagsPanel, `search_${indexQuestionResult}_${indexResult}`, tagsInput);
                
                titleElement.style.display = "none";
                inputTitle.value = titleOldValue;
                inputTitle.parentNode.style.display = "block";
                
                bodyElement.style.display = "none";
                inputBody.value = bodyOldValue;
                inputBody.parentNode.style.display = "block";

                for (let indexFile = 0; indexFile < data.result[indexQuestionResult][indexResult].files.length; indexFile++) {
                	if (imageContents[indexFile].parentNode.parentNode.style.display == "block") {
              	  	imageContents[indexFile].parentNode.parentNode.style.display = "none";
              	  };
              	  if (pdfContents[indexFile].parentNode.parentNode.style.display == "block") {
              	  	pdfContents[indexFile].parentNode.parentNode.style.display = "none";
              	  };
              	  if (txtContents[indexFile].parentNode.parentNode.style.display == "block") {
              	  	txtContents[indexFile].parentNode.parentNode.style.display = "none";
              	  };
              	  if (audioContents[indexFile].parentNode.parentNode.style.display == "block") {
              	  	audioContents[indexFile].parentNode.parentNode.style.display = "none";
              	  };
              	  if (videoContents[indexFile].parentNode.parentNode.style.display == "block") {
              	  	videoContents[indexFile].parentNode.parentNode.style.display = "none";
              	  };
              	  if (codeContents[indexFile].parentNode.parentNode.parentNode.style.display == "block") {
              	  	codeContents[indexFile].parentNode.parentNode.parentNode.style.display = "none";
              	  };

                  buttonDivs[indexFile].style.display = "none";
                  filenameLabels[indexFile].style.display = "none";
                  inputFilenames[indexFile].value = data.result[indexQuestionResult][indexResult].files[indexFile].filename;
                  inputFilenames[indexFile].parentNode.style.display = "block";
                  deleteFileButtons[indexFile].parentNode.style.display = "block";
                };

                inputFile.value = '';
                inputFile.style.display = "block";
              }.bind(this));

              inputFile.addEventListener('focus', function() {
              	inputFile.value = '';
              }.bind(this));
            };
          };
          this.isLogin = true;
      	  searchButtonSearchForNote.disabled = false;
      	  searchInput.disabled = false;
          searchSpinner.style.display = "none";
        });
      }.bind(this));
      this.searchInputClearButtonOnMouseOver = false;
      this.searchInputClearButtonOnFocus = false;
      searchInputClearButton.addEventListener('click', function() {
      	searchInput.value = '';
      }.bind(this));
      searchInputClearButton.addEventListener('mouseover', function() {
      	this.searchInputClearButtonOnMouseOver = true;
      }.bind(this));
      searchInputClearButton.addEventListener('mouseout', function() {
      	this.searchInputClearButtonOnMouseOver = false;
      	if (this.searchInputClearButtonOnFocus) return;
      	searchInputClearButton.style.display = "none";
      }.bind(this));
      searchInput.addEventListener('focus', function() {
      	this.searchInputClearButtonOnFocus = true;
      	searchInputClearButton.style.display = "block";
      }.bind(this));
      searchInput.addEventListener('blur', function(event) {
      	this.searchInputClearButtonOnFocus = false;
      	if (this.searchInputClearButtonOnMouseOver) return;
      	searchInputClearButton.style.display = "none";
      }.bind(this));
      this.fillTagsPanel(searchTagsPanel, "search", searchInput);
    }.bind(this));
  }
}

window.addEventListener("DOMContentLoaded", () => {
  new App();
});
