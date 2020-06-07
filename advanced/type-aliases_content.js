
export default function() {
  return React.createElement('article', {"dangerouslySetInnerHTML":{"__html":"<h1 id=\"%E7%B1%BB%E5%9E%8B%E5%88%AB%E5%90%8D\">类型别名 <a class=\"header-anchor\" href=\"#%E7%B1%BB%E5%9E%8B%E5%88%AB%E5%90%8D\">§</a></h1>\n<p>类型别名用来给一个类型起个新名字。</p>\n<h2 id=\"%E7%AE%80%E5%8D%95%E7%9A%84%E4%BE%8B%E5%AD%90\">简单的例子 <a class=\"header-anchor\" href=\"#%E7%AE%80%E5%8D%95%E7%9A%84%E4%BE%8B%E5%AD%90\">§</a></h2>\n<pre class=\"language-ts\"><code class=\"language-ts\"><span class=\"token keyword\">type</span> <span class=\"token class-name\"><span class=\"token maybe-class-name\">Name</span></span> <span class=\"token operator\">=</span> <span class=\"token builtin\">string</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">type</span> <span class=\"token class-name\"><span class=\"token maybe-class-name\">NameResolver</span></span> <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token arrow operator\">=></span> <span class=\"token builtin\">string</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">type</span> <span class=\"token class-name\"><span class=\"token maybe-class-name\">NameOrResolver</span></span> <span class=\"token operator\">=</span> <span class=\"token maybe-class-name\">Name</span> <span class=\"token operator\">|</span> <span class=\"token maybe-class-name\">NameResolver</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">function</span> <span class=\"token function\">getName</span><span class=\"token punctuation\">(</span>n<span class=\"token operator\">:</span> <span class=\"token maybe-class-name\">NameOrResolver</span><span class=\"token punctuation\">)</span><span class=\"token operator\">:</span> <span class=\"token maybe-class-name\">Name</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span><span class=\"token keyword\">typeof</span> n <span class=\"token operator\">===</span> <span class=\"token string\">'string'</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n        <span class=\"token keyword\">return</span> n<span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span> <span class=\"token keyword\">else</span> <span class=\"token punctuation\">{</span>\n        <span class=\"token keyword\">return</span> <span class=\"token function\">n</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n</code></pre>\n<p>上例中，我们使用 <code>type</code> 创建类型别名。</p>\n<p>类型别名常用于联合类型。</p>\n<h2 id=\"%E5%8F%82%E8%80%83\">参考 <a class=\"header-anchor\" href=\"#%E5%8F%82%E8%80%83\">§</a></h2>\n<ul>\n<li><a href=\"http://www.typescriptlang.org/docs/handbook/advanced-types.html#type-aliases\">Advanced Types # Type Aliases</a>（<a href=\"https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Advanced%20Types.html#%E7%B1%BB%E5%9E%8B%E5%88%AB%E5%90%8D\">中文版</a>）</li>\n</ul>\n<hr>\n<ul>\n<li><a href=\"../advanced/index.html\">上一章：进阶</a></li>\n<li><a href=\"string-literal-types.html\">下一章：字符串字面量类型</a></li>\n</ul>\n"}})
};
