import { Iactivation_steps } from "./activation_steps";
import { Iinbox_list } from "./inbox_list";
import { Ianalytic_card } from "./top_analytics_cards";
import { Ixray_triggers } from "./x_rays_triggers";

export interface Idata{
    top_analytics_cards: Ianalytic_card;
    activation_steps: Iactivation_steps[];
    x_rays_triggers: Ixray_triggers[];
    inbox_list: Iinbox_list[];
}