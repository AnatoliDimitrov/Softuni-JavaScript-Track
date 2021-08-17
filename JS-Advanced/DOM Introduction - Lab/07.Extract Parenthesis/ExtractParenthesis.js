function extract(content) {

    let regex = /\((.+?)\)/gm;

    let text = document.getElementById('content').innerHTML;

    let arr = Array.from(text.matchAll(regex)).reduce((a, e) => {
        a.push(e[1])
        return a;
    }, []);

   return arr.join('; ');
}