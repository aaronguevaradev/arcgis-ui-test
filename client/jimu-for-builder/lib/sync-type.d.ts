export declare enum ToAppMessage {
    AppConfigChanged = "app_config_changed",
    AppInfoChanged = "app_info_changed",
    PortalSelfChanged = "portal_self_changed",
    DialogInfosChanged = "dialog_infos_changed",
    UserSignIn = "user_sign_in",
    SetMainPortal = "set_main_portal",
    ChangeAppMode = "change_app_mode",
    ChangePage = "change_page",
    ChangeDialog = "change_dialog",
    ChangeSelection = "change_selection",
    ChangeWidgetStateProp = "change_widget_state_prop",
    ChangeWidgetMutableStateProp = "change_widget_mutable_state_prop",
    ChangeZoomScale = "change_zoom_scale",
    BuilderTriggerKeyboard = "builder_trigger_keyboard",
    ChangeBrowserSizeMode = "change_browser_size_mode",
    BuilderSessionChanged = "builder_session_changed",
    BuilderResignInFlagsChanged = "builder_resign_in_flags_changed",
    ActivePagePartChanged = "active_page_part_changed",
    AnimationPreview = "animation_preview",
    HoverPreview = "hover_preview",
    SectionNavInfoChanged = "section_navinfo_changed",
    ScreenGroupNavInfoChanged = "screengroup_navinfo_changed",
    TocHoverInfoChanged = "toc_hover_info_changed",
    SetClientIdAlertIsCancelled = "set_client_id_alert_is_cancelled",
    UtilityStateChanged = "utility_state_changed"
}
export declare enum ToBuilderMessage {
    AppStateChanged = "app_state_changed",
    AppSessionChanged = "app_session_changed",
    AppResignInFlagsChanged = "app_resign_in_flags_changed",
    PopupChooseWidget = "popup_choose_widget",
    AppAddResource = "app_add_resource",
    AppClearResources = "app_clear_resources",
    AppTriggerKeyboard = "app_trigger_keyboard",
    SetLayoutTools = "app_set_layout_tools",
    ClearLastAppConfigFromHistory = "clear_last_app_config_from_history",
    SetIsBusy = "app_set_isbusy",
    AppIsLoaded = "app_is_loaded",
    ConfirmDelete = "confirm_delete",
    NeedToRegisterClinetId = "need_to_register_client_id",
    SetSidePanel = "app_side_panel"
}
