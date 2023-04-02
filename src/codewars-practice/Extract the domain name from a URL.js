// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:
//     * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain  name = cnet"

function domainName(url){
    const regex = /^(?:https?:\/\/)?(?:www\.)?([^\/]+)/;
    const match = url.match(regex);
    if (match) {
        const domain = match[1];
        return domain.split(".")[0];
    }
    return "";
}

// This function uses a regular expression to match the domain name in the URL string. The regular expression first matches an optional "http://" or "https://" prefix, followed by an optional "www." prefix, and then captures the domain name as a group of characters that are not a forward slash (i.e., the end of the URL path). The match() function is then used to extract the captured group from the URL string.
//
//     If there is a match, the function splits the domain name on the "." character and returns the first part (i.e., the subdomain or domain name). If there is no match, the function returns
// an empty string.