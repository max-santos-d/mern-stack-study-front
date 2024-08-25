import { useContext } from "react";
import { UserContext } from "../../Context/UserContext";
import { PofileIconEdit, ProfileActions, ProfileAddPost, ProfileBackground, ProfileComponent, ProfileHeader, ProfileUser, ProfileUserAvatar } from "./ProfileStyled";

export function Profile() {
    const { user } = useContext(UserContext);

    return (
        <>
            <ProfileComponent>
                <ProfileHeader>
                    <PofileIconEdit>
                        <i className="bi bi-pencil-square"></i>
                    </PofileIconEdit>

                    <ProfileBackground src={user.background} alt='' />

                    <ProfileUser>
                        <ProfileUserAvatar src={user.avatar} alt='Foto do usuário' />
                        <h2>{user.name}</h2>
                        <h3>@{user.username}</h3>
                    </ProfileUser>

                    <ProfileActions>
                        <ProfileAddPost>
                            <i className="bi bi-plus-circle"></i>
                        </ProfileAddPost>
                    </ProfileActions>
                </ProfileHeader>
            </ProfileComponent>
        </>
    );
};