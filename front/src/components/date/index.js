export default function(time) {
    let t = new Date(time)
    return ''+ (+t.getDate() <10 ? '0'+t.getDate(): t.getDate())+'.'+
    ((+t.getMonth())<=8? '0'+(t.getMonth()+1): t.getMonth()+1)+'.'+t.getFullYear()+'  '+
    (+t.getHours() <10? '0'+t.getHours():t.getHours())+':'+(+t.getMinutes() <10? '0'+t.getMinutes():t.getMinutes());
}