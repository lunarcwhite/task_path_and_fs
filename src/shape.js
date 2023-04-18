function kelilingLingkaran(r)
{
    if(r % 7 === 0){
        return 2 * 22 * (r / 7);
    }else{
        return 2 * 3.14 * r;
    } 
}

function luasLingkaran(r)
{
    if(r % 7 === 0){
        return 22 * (r / 7) * r;
    }else{
        return 3.14 * (r ** 2);
    } 
}

function kelilingSegitiga(segitiga, a = 0, s = 0, t = 0)
{
    if(segitiga === 'samakaki'){
        return (2 * s) + a;
    }else if(segitiga === 'sikusiku'){
        return a + s + t;
    }else if(segitiga === 'samasisi'){
        return s * 3;
    }else{
        console.log('Bukan Segitiga');
    }
}

function luasSegitiga(a,t)
{
    return 0.5 * a * t;
}

function kelilingPersegi(s)
{
    return s * 4;
}

function luasPersegi(s)
{
    return s ** 2;
}

module.exports = {
    kelilingLingkaran,
    kelilingPersegi,
    kelilingSegitiga,
    luasLingkaran,
    luasPersegi,
    luasSegitiga
}