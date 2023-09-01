const { Configuration, OpenAIApi } = require("openai");

// set up the OpenAI API client
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY
});
const openai = new OpenAIApi(configuration);

module.exports.getGPTReplay = async (msg) => {
    try {
        console.log(process.env.OPENAI_API_KEY);
        // send the message to OpenAI and wait for a response
        const chatCompletion = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: msg }],
            "temperature": 0.7
        });

        // get the completed text from the response
        //console.log(chatCompletion);
        const text = chatCompletion.data.choices[0].message.content;
        console.log('GPT message replay:', text);

        return text;
    }
    catch (error) {
        console.error(error);
        //throw new Error('An internal error occurs while connect to chat GPT.');
        return "error!";
    }
}