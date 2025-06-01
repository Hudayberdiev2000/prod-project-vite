import styles from "./ProfileCard.module.scss"
import {classNames} from "~shared/lib/classNames/classNames";
import {useSelector} from "react-redux";
import {getProfileData} from "~entities/profile/model/selectors/getProfileData/getProfileData";
import {getProfileIsLoading} from "~entities/profile/model/selectors/getProfileIsLoading/getProfileIsLoading";
import {getProfileError} from "~entities/profile/model/selectors/getProfileError/getProfileError";
import {useTranslation} from "react-i18next";
import {Text} from "~shared/ui/Text/Text";
import {Button, ThemeButton} from "~shared/ui/Button/Button";
import {Input} from "~shared/ui/input/Input";

interface ProfileCardProps {
    className?: string
}

export const ProfileCard = ({ className }:ProfileCardProps ) => {
    const {t} = useTranslation('profile');

    const data = useSelector(getProfileData)
    const isLoading = useSelector(getProfileIsLoading)
    const error = useSelector(getProfileError)

    return (
      <div className={classNames(styles.ProfileCard, {}, [className])}>
        <div className={styles.header}>
          <Text title={t('Profile')} />
          <Button
              className={styles.editBtn}
              theme={ThemeButton.OUTLINE}
          >
            {t('Edit')}
          </Button>
        </div>
        <div className={styles.data}>
          <Input
              value={data?.first}
              placeholder={t('Your name')}
              className={styles.input}
          />
          <Input
            value={data?.lastName}
            placeholder={t('Your lastname')}
            className={styles.input}
          />
        </div>
      </div>
    )
}
