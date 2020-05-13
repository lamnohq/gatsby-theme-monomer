function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\n/* @jsx mdx */\nvar _frontmatter = {\n  \"title\": \"The last dance\",\n  \"slug\": \"the-last-dance\",\n  \"author\": \"Anindha Parthy\",\n  \"date\": \"2020-05-02T00:00:00.000Z\",\n  \"excerpt\": \"Very interesting show about basketball in the 1990's\",\n  \"comment\": \"Very interesting show about basketball in the 1990's\",\n  \"tags\": [\"Sport\", \"Netflix\"]\n};\n\nvar makeShortcode = function makeShortcode(name) {\n  return function MDXDefaultShortcode(props) {\n    console.warn(\"Component \" + name + \" was not imported, exported, or provided by MDXProvider as global scope\");\n    return mdx(\"div\", props);\n  };\n};\n\nvar layoutProps = {\n  _frontmatter: _frontmatter\n};\nvar MDXLayout = \"wrapper\";\nreturn function MDXContent(_ref) {\n  var components = _ref.components,\n      props = _objectWithoutProperties(_ref, [\"components\"]);\n\n  return mdx(MDXLayout, _extends({}, layoutProps, props, {\n    components: components,\n    mdxType: \"MDXLayout\"\n  }), mdx(\"p\", null, mdx(\"undefined\", {\n    parentName: \"p\"\n  }, \"\\n      \", mdx(\"a\", {\n    \"href\": \"https://www.netflix.com/au/title/80203144\"\n  }, \"\\n        \", mdx(\"img\", _extends({\n    parentName: \"a\"\n  }, {\n    \"src\": \"https://occ-0-1882-2567.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABQ_M-MEoHqSy3NgG8XMRWaTwDvgfh7yKYi_UJCn8dw2KfpwyeRtcnkTssyuiko6FYsiJyFyUuKhMnp9I4mBiCXkyG_K9.jpg?r=8ad\",\n    \"className\": \"gatsby-remark-oembed-photo\",\n    \"width\": \"100%\",\n    \"title\": \"The Last Dance | Netflix Official Site\"\n  })), \"\\n        \", mdx(\"h5\", {\n    parentName: \"a\"\n  }, \"The Last Dance | Netflix Official Site\"), \"\\n        \", mdx(\"p\", {\n    parentName: \"a\"\n  }, \"Michael Jordan. Scottie Pippen. Dennis Rodman. In their own words. The unfiltered story of the Chicago Bulls dynasty. Watch trailers & learn more.\"), \"\\n      \"), \"\\n    \")));\n}\n;\nMDXContent.isMDXComponent = true;
