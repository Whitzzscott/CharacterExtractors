import axios from "axios";

const API_URL = "https://pjoabwtwjcpohcpuhijy.supabase.co/rest/v1/chats_characters";

export async function fetchChatData(
    chatId: string,
    authToken: string,
    apiKey: string
): Promise<any> {
    try {
        console.log(`Fetching chat data for chat ID: ${chatId}`);

        const response = await axios.get(API_URL, {
            headers: {
                Authorization: `Bearer ${authToken}`,
                "Content-Type": "application/json",
                apikey: apiKey
            },
            params: {
                select: "characters(id,name,greeting,alternative_greetings,avatar_file_name,banner_file_name,scenario,is_nsfw,is_forced_nsfw,is_private,profiles!characters_created_by_fkey(username),created_at,updated_at,title,tagline,total_like_count,total_message_count,tag_ids,external_created_by,characters_likes(profile_id),deleted_at)",
                chat_id: `eq.${chatId}`,
                "characters.characters_likes.profile_id": "eq.e322e137-b75c-49d9-8307-31c0fca76af1"
            }
        });

        if (response.status !== 200) {
            throw new Error(`API returned status ${response.status}`);
        }

        return response.data;
    } catch (error: unknown) {
        const errorMessage =
            error instanceof Error
                ? `Failed to fetch chat data: ${error.message}`
                : "An unknown error occurred while fetching chat data.";

        console.error(errorMessage);
        throw new Error(errorMessage);
    }
}
