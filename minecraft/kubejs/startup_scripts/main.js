// =============================================================================
// TaCZ Balance — 15개 코어 아이템 등록 (단순화 버전)
// =============================================================================
// 텍스처는 kubejs/assets/kubejs/textures/item/<core_id>.png 에 두면 적용됨
// (없어도 missing 텍스처로 보일 뿐, 기능엔 영향 없음)
// =============================================================================

StartupEvents.registry('item', event => {
    // 7 타입 코어
    event.create('pistol_core').displayName('§f권총 코어');
    event.create('smg_core').displayName('§fSMG 코어');
    event.create('ar_core').displayName('§f돌격소총 코어');
    event.create('sniper_core').displayName('§b저격총 코어');
    event.create('shotgun_core').displayName('§b산탄총 코어');
    event.create('lmg_core').displayName('§b경기관총 코어');
    event.create('launcher_core').displayName('§b폭발류 코어');

    // 4 모드 코어
    event.create('armorer_core').displayName('§eArmorer 코어');
    event.create('ba_core').displayName('§dBlueArchive 코어');
    event.create('eos_core').displayName('§dEOS 코어');
    event.create('ms_core').displayName('§dMobius 코어');

    // 4 티어 코어
    event.create('t1_core').displayName('§7티어1 코어');
    event.create('t2_core').displayName('§f티어2 코어');
    event.create('t3_core').displayName('§b티어3 코어');
    event.create('t4_core').displayName('§5티어4 코어');

    console.info('[TaCZ Balance] Registered 15 core items.');
});
