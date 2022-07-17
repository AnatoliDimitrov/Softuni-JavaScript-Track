import authentication from "./authentication";

export const createNft = async (data) => {
    return await authentication.post({ ...data });
};