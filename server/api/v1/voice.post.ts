import VoiceResponse from "twilio/lib/twiml/VoiceResponse.js";

export default defineEventHandler(async (event) => {
  setResponseHeaders(event, {
    "Content-Type": "text/xml",
  });

  const body = await readBody(event);

  console.log("***************************");
  console.log("***************************");
  console.log("***************************");
  console.log(body);

  const twiml = new VoiceResponse();

  twiml.say("Welcome!");
  twiml.play({ digits: "9" }, "https://api.twilio.com/cowbell.mp3");
  twiml.say("Please enter now!");

  twiml.hangup();

  return twiml.toString();
});
