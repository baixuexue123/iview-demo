/**
 * Created by jichunyang on 2018/4/24.
 */

export const getCookie = (c_name) =>
{
    if (document.cookie.length>0)
    {
        let c_start=document.cookie.indexOf(c_name + "=");
        if (c_start!==-1)
        {
            c_start=c_start + c_name.length+1;
            let c_end=document.cookie.indexOf(";",c_start);
            if (c_end===-1){
                c_end=document.cookie.length;
            }
            return unescape(document.cookie.substring(c_start,c_end));
        }
    }
    return ""
};


export const setCookie = (c_name,value,expiredays) =>
{
    var exdate=new Date();
    exdate.setDate(exdate.getDate()+expiredays);
    document.cookie=c_name+ "=" +escape(value)+
        ((expiredays==null) ? "" : "; expires="+exdate.toGMTString())+ "; path=/";
};


export const checkCookie = c_name =>
{
    let menustatus=getCookie(c_name);
    if (menustatus!=null && menustatus!=="")
    {
        return menustatus;
    }
    else
    {
        setCookie(c_name,'mini',365);
        return 'mini';
    }
};
