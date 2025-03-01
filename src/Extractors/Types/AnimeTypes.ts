export interface AnimeGfApi {
    APikey: string;
    Authorization_Token: string;
}

export type FetchChatDataFunction = (
    chatId: string,
    authToken: string,
    apiKey: string
) => Promise<any>;

export interface CharacterData {
    name: string;
    title: string;
    tagline: string;
    scenario: string;
    alternative_greetings: string[];
    creator: string;
    author: string;
    created_at: string;
}