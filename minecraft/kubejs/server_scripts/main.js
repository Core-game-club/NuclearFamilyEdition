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

    // =========================================================================
    // ManyIdeas Core Panel/Plate (13)
    // =========================================================================

    // ----- 아카시아 판 — 아카시아 판자
    event.shaped('manyideas_core:panel_acacia', [
        ' A ',
        'A A',
        ' A '
    ], {
         A: 'minecraft:acacia_planks'
    }).id('kubejs:panel_acacia_recipe');

    // ----- 자작나무 판 - 자작나무 판자
    event.shaped('manyideas_core:panel_birch', [
        ' A ',
        'A A',
        ' A '
    ], {
         A: 'minecraft:birch_planks'
    }).id('kubejs:panel_birch_recipe');

    // ----- 진홍빛 판 — 진홍빛 판자
    event.shaped('manyideas_core:panel_crimson', [
        ' A ',
        'A A',
        ' A '
    ], {
         A: 'minecraft:crimson_planks'
    }).id('kubejs:panel_crimson_recipe');

    // ----- 짙은 참나무 판 — 짙은 참나무 판자
    event.shaped('manyideas_core:panel_dark_oak', [
        ' A ',
        'A A',
        ' A '
    ], {
         A: 'minecraft:dark_oak_planks'
    }).id('kubejs:panel_dark_oak_recipe');

    // ----- 정글나무 판 — 정글나무 판자
    event.shaped('manyideas_core:panel_jungle', [
        ' A ',
        'A A',
        ' A '
    ], {
         A: 'minecraft:jungle_planks'
    }).id('kubejs:panel_jungle_recipe');

    // ----- 맹그로브나무 판 — 맹그로브나무 판자
    event.shaped('manyideas_core:panel_mangrove', [
        ' A ',
        'A A',
        ' A '
    ], {
         A: 'minecraft:mangrove_planks'
    }).id('kubejs:panel_mangrove_recipe');

    // ----- 참나무 판 — 참나무 판자
    event.shaped('manyideas_core:panel_oak', [
        ' A ',
        'A A',
        ' A '
    ], {
         A: 'minecraft:oak_planks'
    }).id('kubejs:panel_oak_recipe');

    // ----- 가문비나무 판 — 가문비나무 판자
    event.shaped('manyideas_core:panel_spruce', [
        ' A ',
        'A A',
        ' A '
    ], {
         A: 'minecraft:spruce_planks'
    }).id('kubejs:panel_spruce_recipe');

    // ----- 뒤틀린 판 — 뒤틀린 판자
    event.shaped('manyideas_core:panel_warped', [
        ' A ',
        'A A',
        ' A '
    ], {
         A: 'minecraft:warped_planks'
    }).id('kubejs:panel_warped_recipe');

    // ----- 구리 판 — 구리 조각
    event.shaped('manyideas_core:plate_copper', [
        ' A ',
        'A A',
        ' A '
    ], {
         A: 'create:copper_nugget'
    }).id('kubejs:plate_copper_recipe');

    // ----- 금 판 — 금 조각
    event.shaped('manyideas_core:plate_gold', [
        ' A ',
        'A A',
        ' A '
    ], {
         A: 'minecraft:gold_nugget'
    }).id('kubejs:plate_gold_recipe');

    // ----- 철 판 — 철 조각
    event.shaped('manyideas_core:plate_iron', [
        ' A ',
        'A A',
        ' A '
    ], {
         A: 'minecraft:iron_nugget'
    }).id('kubejs:plate_iron_recipe');

    // ----- 석영 판 — 석영
    event.shaped('manyideas_core:plate_quartz', [
        ' A ',
        'A A',
        ' A '
    ], {
         A: 'minecraft:quartz'
    }).id('kubejs:plate_quartz_recipe');
    console.info('[TaCZ Balance] Core recipes registered (15 cores). [ManyIdeas Core] Panel/Plate recipes registered (13 items).');
    
    // =========================================================================
    // 제작법 수정/변경/삭제
    // =========================================================================

    // ----- 메카니즘 텔레포터 제작법 삭제
    event.remove({id: 'mekanism:teleporter'})
    event.remove({id: 'mekanism:teleporter_frame'})

    // ----- AE2 시공 정박기 제작법 삭제
    event.remove({id: 'ae2:spatial_anchor'})

    // ----- 구리 양조대 제작법 변경 — 보초 갑옷 장식 대장장이 형판 -> 네더라이트 강화 대장장이 형판
    event.remove({output: 'brewery:copper_brewingstation'})
    event.smithing(
    'brewery:copper_brewingstation',
    'minecraft:netherite_upgrade_smithing_template',
    'brewery:wooden_brewingstation',
    'minecraft:copper_ingot'
    )
});
ServerEvents.tags('item', event => {
    
    // ----- 우유 테그 수정
    event.add('c:foods/milk', [
    'minecraft:milk_bucket',
    'farmersdelight:milk_bottle'
    ])

    // ----- 머리 테그 수정
    event.add('c:heads', [
    '#minecraft:skulls'
    ])

    // ----- 강철 판 테그 수정 — 강철 판 -> 강철 주괴
    event.add('c:plates/steel', [
    '#c:ingots/steel'
    ])

    // ----- 유리 테그 수정
    event.add('c:glass', [
    '#c:glass_blocks'
    ])

    // =========================================================================
    // 집라인 호환 도구 추가
    // =========================================================================

    event.add('zipline:attachment', [
    'mekanism:atomic_disassembler',
    'mekanism:meka_tool',
    'mekanism:configurator'
    ])
});
