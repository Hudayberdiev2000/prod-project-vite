import {classNames} from "~shared/lib/classNames/classNames";
import {DynamicModuleLoader, ReducerList} from "~shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {fetchProfileData, ProfileCard, profileReducer} from "~entities/profile";
import {useAppDispatch} from "~shared/lib/hooks/useAppDispatch/useAppDispatch";
import {useEffect} from "react";

const reducers: ReducerList = {
    profile: profileReducer
}

interface ProfilePageProps {
    className?: string
}

const ProfilePage = ({ className }:ProfilePageProps ) => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchProfileData())
    }, [dispatch]);

    return (
      <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
        <div className={classNames("", {}, [className])}>
          <ProfileCard />
        </div>
      </DynamicModuleLoader>
    )
}

export default ProfilePage