// =============================================================================
// TaCZ Balance — 15개 코어 제작 레시피
// =============================================================================
// 모든 코어는 vanilla shaped 레시피 1종으로 제작 (모드 머신 레시피 모두 제거).
//
// [제거 이력]
//   - armorer_core_pressing / ba_core_energising / t2_core_pressing
//     → 1:1 변환이라 shaped 대비 비용 1/9, 밸런스 파괴 발생
//   - launcher_core_mixing
//     → 사용자 요청으로 제거, shaped 단독 운영
//   - Mekanism / AE2 / Create Sequenced Assembly / CBC Casting 9종
//     → 1.21.1 포맷 오류로 미작동, 추후 정확한 포맷 확인 후 재추가 가능
// =============================================================================

ServerEvents.recipes(event => {

    // ----------------- 헬퍼 -----------------
    function safeCustom(name, json) {
        try { event.custom(json).id(`kubejs:${name}`); }
        catch (e) { console.warn(`[TaCZ Balance] '${name}' custom failed: ${e}`); }
    }

    // =========================================================================
    // 타입 코어 (7)
    // =========================================================================

    // ----- 권총 코어 — 철판 + 화약 + 가죽 (vanilla shaped)
    event.shaped('kubejs:pistol_core', [
        ' P ',
        'GLG',
        ' P '
    ], {
        P: '#c:plates/iron',
        G: 'minecraft:gunpowder',
        L: 'minecraft:leather'
    }).id('kubejs:pistol_core_recipe');

    // ----- SMG 코어 — 철판 + 강철 너겟
    event.shaped('kubejs:smg_core', [
        'NIN',
        'NIN',
        ' I '
    ], {
        I: '#c:plates/iron',
        N: '#c:nuggets/steel'
    }).id('kubejs:smg_core_recipe');

    // ----- AR 코어 — 강철 + 다이아 + 철 (Mekanism Infuser 대체)
    event.shaped('kubejs:ar_core', [
        'DSD',
        'SIS',
        'DSD'
    ], {
        S: '#c:ingots/steel',
        D: 'minecraft:diamond',
        I: 'minecraft:iron_ingot'
    }).id('kubejs:ar_core_recipe');

    // ----- 저격총 코어 ↔ 산탄총 코어 레시피 SWAP
    // sniper_core가 이전 shotgun_core 레시피 (오스뮴 + 강철블록 — 묵직한 가공)
    event.shaped('kubejs:sniper_core', [
        'OSO',
        'SBS',
        'OSO'
    ], {
        S: '#c:ingots/steel',
        O: '#c:ingots/osmium',
        B: '#c:storage_blocks/steel'
    }).id('kubejs:sniper_core_recipe');

    // shotgun_core가 이전 sniper_core 레시피 (안산암 합금 + 청금석 + 로즈쿼츠 — 정밀 가공)
    event.shaped('kubejs:shotgun_core', [
        'RAR',
        'LSL',
        'RAR'
    ], {
        S: '#c:ingots/steel',
        A: '#c:ingots/andesite_alloy',
        L: 'minecraft:lapis_lazuli',
        R: 'create:polished_rose_quartz'
    }).id('kubejs:shotgun_core_recipe');

    // ----- 경기관총 코어 — 황동 + 강철 + 강철 케이싱 (CBC Casting 대체)
    event.shaped('kubejs:lmg_core', [
        'BSB',
        'SCS',
        'BSB'
    ], {
        S: '#c:ingots/steel',
        B: '#c:ingots/brass',
        C: 'mekanism:steel_casing'
    }).id('kubejs:lmg_core_recipe');

    // ----- 중화기 코어 — shaped only
    // (이전 Create Mixing 레시피 제거 — shaped 단독으로 운영)
    event.shaped('kubejs:launcher_core', [
        'BGB',
        'GTG',
        'BGB'
    ], {
        T: 'mekanism:steel_casing',
        G: 'createbigcannons:packed_gunpowder',
        B: '#c:plates/iron'
    }).id('kubejs:launcher_core_recipe');

    // =========================================================================
    // 모드 코어 (4)
    // =========================================================================

    // ----- Armorer 코어 — shaped only
    // (이전에 Create Press 1:1 변환이 있었으나 shaped 대비 비용 1/9 로 밸런스 파괴 → 제거)
    event.shaped('kubejs:armorer_core', [
        'AOA',
        'ORO',
        'AOA'
    ], {
        A: 'mekanism:alloy_infused',
        O: '#c:ingots/refined_obsidian',
        R: 'create_new_age:overcharged_iron'
    }).id('kubejs:armorer_core_recipe');

    // ----- BA 코어 — shaped only
    // (이전에 Create New Age Energising 다이아 1개 → ba_core 였으나 shaped 대비 1/9 비용으로 밸런스 파괴 → 제거)
    event.shaped('kubejs:ba_core', [
        'LDL',
        'DMD',
        'LDL'
    ], {
        D: 'minecraft:diamond',
        L: 'minecraft:lapis_lazuli',
        M: 'create:precision_mechanism'
    }).id('kubejs:ba_core_recipe');

    // ----- EOS 코어 — Engineering Processor + Entro Ingot + 고급 제어 회로
    // 발광석 가루 → entro_ingot, 구리 주괴 → 고급 제어 회로
    event.shaped('kubejs:eos_core', [
        'GEG',
        'LCL',
        'GEG'
    ], {
        E: 'ae2:engineering_processor',
        G: 'extendedae:entro_ingot',
        L: 'minecraft:lapis_lazuli',
        C: 'mekanism:advanced_control_circuit'
    }).id('kubejs:eos_core_recipe');

    // ----- Mobius 코어 — 정제 흑요석 + 강철 + 정밀 부품
    // 폴로늄 알갱이 → 강철 주괴
    event.shaped('kubejs:ms_core', [
        'OPO',
        'PRP',
        'OPO'
    ], {
        O: '#c:ingots/refined_obsidian',
        P: 'mekanism:ingot_steel',
        R: 'create:precision_mechanism'
    }).id('kubejs:ms_core_recipe');

    // =========================================================================
    // 티어 코어 (4)
    // =========================================================================

    // ----- T1 코어 — 가장 단순
    event.shaped('kubejs:t1_core', [
        ' I ',
        'CRC',
        ' I '
    ], {
        I: 'minecraft:iron_ingot',
        C: '#c:ingots/copper',
        R: 'minecraft:redstone'
    }).id('kubejs:t1_core_recipe');

    // ----- T2 코어 — shaped only
    // (이전에 Create Press 안산암 합금 1개 → t2_core 였으나 shaped 대비 1/9 비용으로 밸런스 파괴 → 제거)
    event.shaped('kubejs:t2_core', [
        'ASA',
        'SRS',
        'ASA'
    ], {
        S: 'mekanism:steel_casing',
        A: '#c:ingots/andesite_alloy',
        R: 'minecraft:redstone_block'
    }).id('kubejs:t2_core_recipe');

    // ----- T3 코어 — 정제 발광석 + 다이아 + T2 코어 (이전 numeric key 문제 해결)
    event.shaped('kubejs:t3_core', [
        'GDG',
        'DTD',
        'GDG'
    ], {
        G: '#c:ingots/refined_glowstone',
        D: 'minecraft:diamond',
        T: 'kubejs:t2_core'
    }).id('kubejs:t3_core_recipe');

    // ----- T4 코어 — 정제 흑요석 블록 + 반물질 + T3 코어 (이전 numeric key 문제 해결)
    event.custom({
        
        "type": "mekanism:nucleosynthesizing",
        "chemical_input": {
            "amount": 4000,
            "chemical": "mekanism:antimatter"
        },
        "duration": 2000,
        "item_input": {
            "count": 1,
            "item": "kubejs:t3_core"
        },
        "output": {
            "count": 1,
            "id": "kubejs:t4_core"
        },
        "per_tick_usage": false
        
    })

    event.shaped('kubejs:t4_core', [
        'OAO',
        'AXA',
        'OAO'
    ], {
        O: '#c:storage_blocks/refined_obsidian',
        A: '#c:pellets/antimatter',
        X: 'kubejs:t3_core'
    }).id('kubejs:t4_core_recipe');

    console.info('[TaCZ Balance] Core recipes registered (15 cores).');
});
