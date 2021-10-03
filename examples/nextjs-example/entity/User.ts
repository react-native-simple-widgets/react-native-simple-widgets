export function User(_userDto = {} as any) {

    return {
        _id: _userDto._id || "",
    };
}

export type IUser = ReturnType<typeof User>;
