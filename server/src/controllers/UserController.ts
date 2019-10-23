import UserRepository from '../repositories/UserRepository'

export const users = async(_req:any, res:any): Promise<void> => {
    const users = await UserRepository.users();

    res.json(users);
}

export const getUser = async(req:any, res:any): Promise<void> => {
    const user = await UserRepository.getUser(req.params.id);

    res.json(user);
}