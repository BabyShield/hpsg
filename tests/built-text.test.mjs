import test from "node:test";
import assert from "node:assert/strict";
import { normalise, visibleText } from "../scripts/lib/built-text.mjs";

test("publication checks preserve displayed entity literals without decoding twice", () => {
  assert.equal(normalise("&amp;quot; &#38;nbsp; &#x26;apos;"), "&quot; &nbsp; &apos;");
  assert.equal(normalise("Kitchen &amp; bathroom &#39;work&#x27;"), "Kitchen & bathroom 'work'");
  assert.equal(normalise("&#x110000; &#0;"), "\ufffd \ufffd");
});

test("visible-copy checks ignore mixed-case script and style contents", () => {
  const html = '<p>Reviewed copy</p><SCRIPT>hidden claim</sCrIpT data-old="yes"><Style>hidden style</STYLE ><p>Other services</p>';
  assert.equal(visibleText(html), "Reviewed copy Other services");
  assert.equal(visibleText("<p>Quoted &lt;script&gt; text</p>"), "Quoted <script> text");
});
