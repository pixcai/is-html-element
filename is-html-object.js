(function(root, isHtmlObject) {
  if (typeof define === 'function' && define.amd) {
    define(isHtmlObject);
  } else if (typeof exports === 'object') {
    module.exports = isHtmlObject;
  } else {
    root.isHtmlObject = isHtmlObject;
  }
})(this, function() {
  function __check(el) {
    if (typeof el === 'string') {
      el = document.querySelector(el);
    }
    return el;
  }

  var isHtmlObject = function(el) {
    if (!(this instanceof isHtmlObject)) {
      el = __check(el);
      return isHtmlObject.htmlElement(el) || isHtmlObject.browserObject(el);
    }
  };

  var BrowserObjects = [
    'window',
    'document',
    'navigator',
    'screen',
    'history',
    'location'
  ];

  BrowserObjects.forEach(function(object) {
    isHtmlObject[object] = function(el) {
      el = __check(el);
      return RegExp(object).test(
        Object.prototype.toString.call(el).toLowerCase()
      );
    };
  });

  isHtmlObject.browserObject = function(el) {
    return !!BrowserObjects.find(function(object) {
      return isHtmlObject[object](el);
    });
  };

  var HtmlTags = [
    'anchor', 'applet', 'area', 'audio',
    'base', 'body', 'br', 'button',
    'canvas',
    'data', 'datalist', 'dialog', 'directory', 'div', 'dlist',
    'embed',
    'field', 'font', 'form', 'frame', 'frameset',
    'head', 'heading', 'html', 'hr',
    'iframe', 'image', 'input',
    'keygen',
    'label', 'legend', 'li', 'link',
    'map', 'media', 'menu', 'meta', 'meter', 'mod',
    'object', 'olist', 'optgroup', 'option', 'output',
    'paragraph', 'param', 'pre', 'progress',
    'quote',
    'script', 'select', 'source', 'span', 'style',
    'table', 'tablecaption', 'tablecell', 'tabledatacell', 'tableheadercell', 'tablecol', 'tablerow', 'tablesection', 'textarea', 'time', 'title', 'track',
    'ulist', 'unknown',
    'video'
  ];

  HtmlTags.forEach(function(tag) {
    isHtmlObject[tag] = function(el) {
      el = __check(el);
      return RegExp('html' + tag + 'element').test(
        Object.prototype.toString.call(el).toLowerCase()
      );
    };
  });

  isHtmlObject.htmlElement = function(el) {
    return !!HtmlTags.find(function(tag) {
      return isHtmlObject[tag](el);
    });
  };

  return isHtmlObject;
}());
