import InstagramIcon from "./small/InstagramIcon";
import FacebookIcon from "./small/FacebookIcon";
import TwitterIcon from "./small/TwitterIcon";
import SpotifyIcon from "./spotifyIcon";
import SoundcloudIcon from "./SoundcloudIcon";
import YoutubeIcon from "./youtubeIcon";
import TonedenIcon from "./tonedenIcon";
import BandcampIcon from "./BandcampIcon";
import FlashcookieIcon from "./flashcookieIcon";
import YoutubeSmallIcon from "./small/YoutubeIcon";
import SpotifySmallIcon from "./small/SpotifyIcon";
import TonedenSmallIcon from "./small/TonedenIcon";
import BandcampSmallIcon from "./small/BandcampIcon";
import SoundcloudSmallIcon from "./small/SoundcloudIcon";
import YoutubeWhiteIcon from "./white/youtubeIcon";
import ExternalLinkIcon from "./externalLinkIcon";
import RightArrowLargeIcon from "./rightArrowLargeIcon";

const getIcon = key => {
  const icons = {
    "instagram": InstagramIcon,
    "facebook": FacebookIcon,
    "twitter": TwitterIcon,
    "youtube": YoutubeIcon,
    "spotify": SpotifyIcon,
    "bandcamp": BandcampIcon,
    "soundcloud": SoundcloudIcon,
    "toneden": TonedenIcon,
    "flashcookie": FlashcookieIcon,
    "youtube-small": YoutubeSmallIcon,
    "spotify-small": SpotifySmallIcon,
    "toneden-small": TonedenSmallIcon,
    "bandcamp-small": BandcampSmallIcon,
    "soundcloud-small": SoundcloudSmallIcon,
    "youtube-white": YoutubeWhiteIcon,
    "external-link": ExternalLinkIcon,
    "right-arrow-large": RightArrowLargeIcon,
  };
  return icons[key] || icons['toneden'];
};

export default getIcon;
