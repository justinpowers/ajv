(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{530:function(e,t,a){"use strict";a.r(t);var i=a(53),o=Object(i.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"changes-from-ajv-v6-12-6-to-v8-0-0"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#changes-from-ajv-v6-12-6-to-v8-0-0"}},[e._v("#")]),e._v(" Changes from Ajv v6.12.6 to v8.0.0")]),e._v(" "),a("p",[e._v("If you are migrating from v7 see "),a("a",{attrs:{href:"https://github.com/ajv-validator/ajv/releases/tag/v8.0.0",target:"_blank",rel:"noopener noreferrer"}},[e._v("v8.0.0 release notes"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#new-features"}},[e._v("New features")])]),a("li",[a("a",{attrs:{href:"#better-typescript-support"}},[e._v("Better TypeScript support")])]),a("li",[a("a",{attrs:{href:"#potential-migration-difficulties"}},[e._v("Potential migration difficulties")])]),a("li",[a("a",{attrs:{href:"#api-changes"}},[e._v("API changes")]),a("ul",[a("li",[a("a",{attrs:{href:"#added-options"}},[e._v("Added options")])]),a("li",[a("a",{attrs:{href:"#changed-options"}},[e._v("Changed options")])]),a("li",[a("a",{attrs:{href:"#removed-options"}},[e._v("Removed options")])])])])])]),a("p"),e._v(" "),a("h2",{attrs:{id:"new-features"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#new-features"}},[e._v("#")]),e._v(" New features")]),e._v(" "),a("ul",[a("li",[e._v("support new schema specifications:\n"),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/json-type-definition.html"}},[e._v("JSON Type Definition")]),e._v(" "),a("a",{attrs:{href:"https://datatracker.ietf.org/doc/rfc8927/",target:"_blank",rel:"noopener noreferrer"}},[e._v("RFC8927"),a("OutboundLink")],1),e._v(". See "),a("a",{attrs:{href:"https://ajv.js.org/guide/schema-language.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("choosing schema language"),a("OutboundLink")],1),e._v(" for comparison with JSON Schema.")],1),e._v(" "),a("li",[e._v("JSON Schema draft-2020-12: "),a("RouterLink",{attrs:{to:"/json-schema.html#prefixitems"}},[e._v("prefixItems")]),e._v(" keyword and changed semantics of "),a("RouterLink",{attrs:{to:"/json-schema.html#items-in-draft-2020-12"}},[e._v("items")]),e._v(" keyword, "),a("RouterLink",{attrs:{to:"/guide/combining-schemas.html#extending-recursive-schemas"}},[e._v("dynamic recursive references")]),e._v(".")],1),e._v(" "),a("li",[e._v("JSON Schema draft-2019-09 features: "),a("RouterLink",{attrs:{to:"/json-schema.html#unevaluatedproperties"}},[a("code",[e._v("unevaluatedProperties")])]),e._v(" and "),a("RouterLink",{attrs:{to:"/json-schema.html#unevaluateditems"}},[a("code",[e._v("unevaluatedItems")])]),e._v(", "),a("RouterLink",{attrs:{to:"/guide/combining-schemas.html#extending-recursive-schemas"}},[e._v("dynamic recursive references")]),e._v(" and other "),a("RouterLink",{attrs:{to:"/json-schema.html#json-schema-draft-2019-09"}},[e._v("additional keywords")]),e._v(".")],1),e._v(" "),a("li",[e._v("OpenAPI "),a("RouterLink",{attrs:{to:"/json-schema.html#discriminator"}},[e._v("discriminator")]),e._v(" keyword.")],1)])]),e._v(" "),a("li",[e._v("Compiled parsers (as fast as JSON.parse on valid JSON, but replace validation and fail much faster on invalid JSON) and serializers (10x+ faster than JSON.stringify) from JSON Type Definition schemas - see examples in "),a("RouterLink",{attrs:{to:"/guide/getting-started.html#parsing-and-serializing-json"}},[e._v("javascript")]),e._v(" and "),a("RouterLink",{attrs:{to:"/guide/typescript.html#type-safe-parsers-and-serializers"}},[e._v("typescript")]),e._v(".")],1),e._v(" "),a("li",[e._v("comprehensive support for "),a("RouterLink",{attrs:{to:"/standalone.html"}},[e._v("standalone validation code")]),e._v(" - compiling one or multiple schemas to standalone modules with one or multiple exports.")],1),e._v(" "),a("li",[e._v("to reduce the mistakes in JSON schemas and unexpected validation results, "),a("RouterLink",{attrs:{to:"/strict-mode.html"}},[e._v("strict mode")]),e._v(" is added - it prohibits ignored or ambiguous JSON Schema elements. See "),a("RouterLink",{attrs:{to:"/strict-mode.html"}},[e._v("Strict mode")]),e._v(" and "),a("RouterLink",{attrs:{to:"/options.html"}},[e._v("Options")]),e._v(" for more details.")],1),e._v(" "),a("li",[e._v("to make code injection from untrusted schemas impossible, "),a("RouterLink",{attrs:{to:"/codegen.html"}},[e._v("code generation")]),e._v(" is fully re-written to be type-level safe against code injection.")],1),e._v(" "),a("li",[e._v("to simplify Ajv extensions, the new keyword API that is used by pre-defined keywords is available to user-defined keywords - it is much easier to define any keywords now, especially with subschemas.")]),e._v(" "),a("li",[e._v("schemas are compiled to ES6 code (ES5 code generation is supported with an option).")]),e._v(" "),a("li",[e._v("to improve reliability and maintainability the code is migrated to TypeScript.")]),e._v(" "),a("li",[e._v("separate Ajv classes from draft-07, draft-2019-09, draft-2020-12 and JSON Type Definition support with different default imports (see "),a("RouterLink",{attrs:{to:"/guide/getting-started.html"}},[e._v("Getting started")]),e._v(".")],1)]),e._v(" "),a("p",[a("strong",[e._v("Please note")]),e._v(":")]),e._v(" "),a("ul",[a("li",[e._v('the support for JSON-Schema draft-04 is removed - if you have schemas using "id" attributes you have to replace them with "$id" (or continue using version 6 that will be supported until 06/30/2021).')]),e._v(" "),a("li",[e._v("all formats are separated to "),a("a",{attrs:{href:"https://github.com/ajv-validator/ajv-formats",target:"_blank",rel:"noopener noreferrer"}},[e._v("ajv-formats"),a("OutboundLink")],1),e._v(" package - they have to be explicitly added if you use them.")]),e._v(" "),a("li",[e._v("Ajv instance can only be created with "),a("code",[e._v("new")]),e._v(" keyword, as Ajv is now ES6 class.")]),e._v(" "),a("li",[e._v("browser bundles are automatically published to ajv-dist package (but still available on cdnjs.com).")]),e._v(" "),a("li",[e._v("order of schema keyword validation changed - keywords that apply to all types (allOf etc.) are now validated first, before the keywords that apply to specific data types. You can still define custom keywords that apply to all types AND are validated after type-specific keywords using option "),a("code",[e._v("post: true")]),e._v(" in keyword definition.")]),e._v(" "),a("li",[e._v('regular expressions in keywords "pattern" and "patternProperties" are now used as if they had unicode "u" flag, as required by JSON Schema specification - it means that some regular expressions that were valid with Ajv v6 are now invalid (and vice versa).')]),e._v(" "),a("li",[e._v("JSON Schema validation errors changes:\n"),a("ul",[a("li",[a("code",[e._v("dataPath")]),e._v(" property replaced with "),a("code",[e._v("instancePath")])]),e._v(" "),a("li",[e._v('"should" replaced with "must" in the messages')]),e._v(" "),a("li",[e._v('property name is removed from "propertyName" keyword error message (it is still available in '),a("code",[e._v("error.params.propertyName")]),e._v(").")])])])]),e._v(" "),a("h2",{attrs:{id:"better-typescript-support"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#better-typescript-support"}},[e._v("#")]),e._v(" Better TypeScript support")]),e._v(" "),a("ul",[a("li",[e._v("Methods "),a("code",[e._v("compile")]),e._v(" and "),a("code",[e._v("compileAsync")]),e._v(" now return type-guards - see "),a("RouterLink",{attrs:{to:"/guide/getting-started.html"}},[e._v("Getting started")]),e._v(".")],1),e._v(" "),a("li",[e._v("Method "),a("code",[e._v("validate")]),e._v(" is a type-guard.")]),e._v(" "),a("li",[e._v("Better separation of asynchronous schemas on type level.")]),e._v(" "),a("li",[e._v("Schema utility types to simplify writing schemas:\n"),a("ul",[a("li",[e._v("JSONSchemaType<T>: generates the type for JSON Schema for type interface in the type parameter.")]),e._v(" "),a("li",[e._v("JTDSchemaType<T>: generates the type for JSON Type Definition schema for type interface in the type parameter.")]),e._v(" "),a("li",[e._v("JTDDataType<T>: generates the type for data given JSON Type Definition schema type in the type parameter.")])])])]),e._v(" "),a("h2",{attrs:{id:"potential-migration-difficulties"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#potential-migration-difficulties"}},[e._v("#")]),e._v(" Potential migration difficulties")]),e._v(" "),a("ul",[a("li",[e._v("Schema compilation is now safer against code injections but slower than in v6 ("),a("a",{attrs:{href:"https://github.com/ajv-validator/ajv/issues/1386",target:"_blank",rel:"noopener noreferrer"}},[e._v("#1386"),a("OutboundLink")],1),e._v(") - consider using "),a("RouterLink",{attrs:{to:"/standalone.html"}},[e._v("standalone validation code")]),e._v(" if this is a problem. Validation performance in v8 is the same (or better, thanks to "),a("RouterLink",{attrs:{to:"/codegen.html#code-optimization"}},[e._v("code optimizations")]),e._v(").")],1),e._v(" "),a("li",[e._v("Schema object used as a key for compiled schema function, not serialized string ("),a("a",{attrs:{href:"https://github.com/ajv-validator/ajv/issues/1413",target:"_blank",rel:"noopener noreferrer"}},[e._v("#1413"),a("OutboundLink")],1),e._v(") can cause schema compilation on each validation if you pass a new schema object. See "),a("RouterLink",{attrs:{to:"/guide/managing-schemas.html"}},[e._v("Managing schemas")]),e._v(" for different approaches to manage caching of compiled validation functions.")],1),e._v(" "),a("li",[e._v("User defined formats with standalone validation code ("),a("a",{attrs:{href:"https://github.com/ajv-validator/ajv/issues/1470",target:"_blank",rel:"noopener noreferrer"}},[e._v("#1470"),a("OutboundLink")],1),e._v(") require passing code snippet to "),a("RouterLink",{attrs:{to:"/options.html#code"}},[e._v("code.formats")]),e._v(" option.")],1)]),e._v(" "),a("h2",{attrs:{id:"api-changes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#api-changes"}},[e._v("#")]),e._v(" API changes")]),e._v(" "),a("ul",[a("li",[e._v("addVocabulary - NEW method that allows to add an array of keyword definitions.")]),e._v(" "),a("li",[e._v('addKeyword - keyword name should be passed as property in definition object, not as the first parameter (old API works with "deprecated" warning). Also "inline" keywords support is removed, code generation keywords can now be defined with "code" keyword - the same definition format that is used by all pre-defined keywords.')]),e._v(" "),a("li",[e._v("Ajv no longer allows to create the instance without "),a("code",[e._v("new")]),e._v(" keyword (it is ES6 class).")]),e._v(" "),a("li",[e._v("allow "),a("code",[e._v('":"')]),e._v(" in keyword names.")])]),e._v(" "),a("h3",{attrs:{id:"added-options"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#added-options"}},[e._v("#")]),e._v(" Added options")]),e._v(" "),a("ul",[a("li",[e._v('strict: true/false/"log" - enables/disables all strict mode restrictions:\n'),a("ul",[a("li",[e._v("strictSchema: "),a("strong",[e._v("true")]),e._v('/false/"log" - equivalent to the combination of strictKeywords and strictDefaults in v6, with additional restrictions (see '),a("RouterLink",{attrs:{to:"/strict-mode.html"}},[e._v("Strict mode")]),e._v(").")],1),e._v(" "),a("li",[e._v("strictTypes: true/false/"),a("strong",[e._v('"log"')]),e._v(" - prevent mistakes related to type keywords and keyword applicability (see "),a("RouterLink",{attrs:{to:"/strict-mode.html#strict-types"}},[e._v("Strict Types")]),e._v(").")],1),e._v(" "),a("li",[e._v("strictTuples: true/false/"),a("strong",[e._v('"log"')]),e._v(" - prevent incomplete tuple schemas (see "),a("RouterLink",{attrs:{to:"/strict-mode.html#prohibit-unconstrained-tuples"}},[e._v("Prohibit unconstrained tuples")]),e._v(")")],1),e._v(" "),a("li",[e._v("strictRequired: true/"),a("strong",[e._v("false")]),e._v('/"log" - to log or fail if properties used in JSON Schema "required" are not defined in "properties" (see '),a("RouterLink",{attrs:{to:"/strict-mode.html#defined-required-properties"}},[e._v("Defined required properties")]),e._v(").")],1)])]),e._v(" "),a("li",[e._v('allowUnionTypes: false - allow multiple non-null types in "type" keyword')]),e._v(" "),a("li",[e._v('allowMatchingProperties: false - allow overlap between "properties" and "patternProperties" keywords')]),e._v(" "),a("li",[e._v("discriminator: true - support OpenAPI "),a("RouterLink",{attrs:{to:"/json-schema.html#discriminator"}},[e._v("discriminator")]),e._v(" keyword")],1),e._v(" "),a("li",[e._v("loopEnum - optimise validation of enums, similar to "),a("RouterLink",{attrs:{to:"/options.html#looprequired"}},[e._v("loopRequired")]),e._v(" option.")],1),e._v(" "),a("li",[e._v("validateFormats - enable format validation ("),a("code",[e._v("true")]),e._v(" by default)")]),e._v(" "),a("li",[e._v("code: {optimize: number|boolean} - control "),a("RouterLink",{attrs:{to:"/codegen.html#code-optimization"}},[e._v("code optimisation")])],1),e._v(" "),a("li",[e._v("code: {es5: true} - generate ES5 code, the default is to generate ES6 code.")]),e._v(" "),a("li",[e._v("code: {lines: true} - add line breaks to generated code - simplifies debugging of compiled schemas when you need it")])]),e._v(" "),a("h3",{attrs:{id:"changed-options"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#changed-options"}},[e._v("#")]),e._v(" Changed options")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("keywords")]),e._v(' - now expects the array of keyword definitions (old API works with "deprecated" warning).')]),e._v(" "),a("li",[a("code",[e._v("strictNumbers")]),e._v(" - true by default now.")])]),e._v(" "),a("h3",{attrs:{id:"removed-options"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#removed-options"}},[e._v("#")]),e._v(" Removed options")]),e._v(" "),a("ul",[a("li",[e._v("errorDataPath - was deprecated, now removed.")]),e._v(" "),a("li",[e._v("format - "),a("code",[e._v("validateFormats: false")]),e._v(" can be used instead, format mode can be chosen via ajv-formats package.")]),e._v(" "),a("li",[e._v("nullable: "),a("code",[e._v("nullable")]),e._v(" keyword is supported by default.")]),e._v(" "),a("li",[e._v("jsonPointers: JSONPointers are used to report errors by default, "),a("code",[e._v("jsPropertySyntax: true")]),e._v(" (deprecated) can be used if old format is needed.")]),e._v(" "),a("li",[e._v("unicode: deprecated, string length correctly accounts for multi-byte characters by default.")]),e._v(" "),a("li",[e._v("extendRefs: $ref siblings are validated by default (consistent with draft 2019-09), "),a("code",[e._v("ignoreKeywordsWithRef")]),e._v(" (deprecated) can be used instead to ignore $ref siblings.")]),e._v(" "),a("li",[e._v("missingRefs: now exception is always thrown. Pass empty schema with $id that should be ignored to ajv.addSchema.")]),e._v(" "),a("li",[e._v("processCode: replaced with "),a("code",[e._v("code: {process: (code, schemaEnv: object) => string}")]),e._v(".")]),e._v(" "),a("li",[e._v("sourceCode: replaced with "),a("code",[e._v("code: {source: true}")]),e._v(".")]),e._v(" "),a("li",[e._v("schemaId: removed, as JSON Schema draft-04 is no longer supported.")]),e._v(" "),a("li",[e._v("strictDefaults, strictKeywords: it is default now, controlled with "),a("code",[e._v("strict")]),e._v(" or "),a("code",[e._v("strictSchema")]),e._v(".")]),e._v(" "),a("li",[e._v('uniqueItems: \'"uniqueItems" keyword is always validated.')]),e._v(" "),a("li",[e._v("unknownFormats: the same can be achieved by passing true for formats that need to be ignored via "),a("code",[e._v("ajv.addFormat")]),e._v(" or "),a("code",[e._v("formats")]),e._v(" option.")]),e._v(" "),a("li",[e._v("cache and serialize: Map is used as cache, schema object as key.")])])])}),[],!1,null,null,null);t.default=o.exports}}]);