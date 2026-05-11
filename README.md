# Nuclear Family Edition

Minecraft 1.21.1 NeoForge 커스텀 모드팩

## 환경

| 항목 | 버전 |
|------|------|
| Minecraft | 1.21.1 |
| NeoForge | 21.1.228 |
| Java | 21 |
| 런처 | Prism Launcher |

## 설치

1. [Prism Launcher](https://prismlauncher.org/) 설치
2. 이 저장소를 클론
   ```
   git lfs install
   git clone https://github.com/Core-game-club/NuclearFamilyEdition.git
   ```
3. Prism Launcher에서 "인스턴스 추가" > "인스턴스 폴더 가져오기"로 폴더 지정

> **Note:** 이 저장소는 Git LFS를 사용합니다. `git lfs install`을 먼저 실행해주세요.

## 구조

```
NuclearFamilyEdition/
├── instance.cfg
├── mmc-pack.json
└── minecraft/
    ├── mods/                        # NeoForge 모드 (127개)
    ├── kubejs/
    │   ├── config/
    │   │   ├── client.json
    │   │   ├── common.json
    │   │   └── web_server.json
    │   ├── assets/kubejs/textures/item/  # 커스텀 아이템 텍스처
    │   ├── startup_scripts/
    │   │   └── main.js
    │   ├── server_scripts/
    │   │   ├── main.js
    │   │   └── gun_recipes.js       # 총기 제작 레시피
    │   └── client_scripts/
    │       └── main.js
    └── tacz/
        ├── Applied Armorer-v1.1.4.1.zip
        ├── BlueArchive FPS Ver.TaCZ 1.21.0 FOX.zip
        ├── EOS_Dawn Goddess Lab v1.1.1-hotfix1.zip
        ├── MS-Mobius Gunspack v1.5.2.zip
        └── tacz_default_gun/        # 기본 총기 데이터
```

## 모드 목록

```
mods/
├── AnvilNeverTooExpensive-neoforge-1.21+-1.2.1.jar
├── Applied-Mekanistics-1.6.3.jar
├── Clumps-neoforge-1.21.1-19.0.0.1.jar
├── Controlling-neoforge-1.21.1-19.0.5.jar
├── CreateDragonsPlus-1.10.0b.jar
├── DnDesires-1.21.1-2.3a-BETA.jar
├── DramaticDoors-NeoQuiFab-1.21.1-3.3.2.jar
├── ExtendedAE-1.21-2.2.29-neoforge.jar
├── ExtremeSoundMuffler-3.56_NeoForge-1.21.jar
├── FarmersDelight-1.21.1-1.3.1.jar
├── FramedBlocks-10.5.3.jar
├── Glodium-1.21-2.2-neoforge.jar
├── ImmediatelyFast-NeoForge-1.6.10+1.21.1.jar
├── Jade-1.21.1-NeoForge-15.10.5.jar
├── JadeAddons-1.21.1-NeoForge-6.1.0.jar
├── ManyIdeasCore-1.21.1-3.0.1.jar
├── ManyIdeasDoors-1.21.1-2.0.1.jar
├── Mekanism-1.21.1-10.7.19.85.jar
├── MekanismGenerators-1.21.1-10.7.19.85.jar
├── MouseTweaks-neoforge-mc1.21-2.26.1.jar
├── MyNethersDelight-1.21.1-1.10.2.jar
├── NoChatReports-NEOFORGE-1.21.1-v2.9.1.jar
├── RecipesLibrary-1.21.1-4.0.1.jar
├── Searchables-neoforge-1.21.1-1.0.2.jar
├── ae2wtlib-19.5.0.jar
├── another_furniture-neoforge-4.0.2.jar
├── appleskin-neoforge-mc1.21-3.0.9.jar
├── appliedenergistics2-19.2.17.jar
├── architectury-13.0.8-neoforge.jar
├── baguettelib-1.21.1-NeoForge-2.0.3.jar
├── balm-neoforge-1.21.1-21.0.57.jar
├── bellsandwhistles-0.4.7-1.21.1.jar
├── cable_facades-1.21.1-NeoForge-2.0.2.jar
├── caelus-neoforge-7.0.1+1.21.1.jar
├── caramelChat-mc1.21.1-neoforge-1.2.2.jar
├── chunkactivitytracker-neoforge-1.0.1-1.21.1.jar
├── copycats-3.0.4+mc.1.21.1-neoforge.jar
├── craftingtweaks-neoforge-1.21.1-21.1.10.jar
├── create-1.21.1-6.0.10.jar
├── create-central-kitchen-2.4.0.jar
├── create-enchantment-industry-2.3.1.jar
├── create-new-age-1.1.7c+neoforge-mc1.21.1.jar
├── create_connected-1.1.16-mc1.21.1.jar
├── createaddition-1.5.10.jar
├── createbigcannons-5.11.3+mc.1.21.1.jar
├── createdeco-2.1.3.jar
├── creategoggles-1.21.1-6.1.1-[NEOFORGE].jar
├── createrailwaysnavigator-neoforge-1.21.1-beta-0.9.0-C6.jar
├── culturaldelights-0.17.8.jar
├── curios-neoforge-9.5.1+1.21.1.jar
├── curios_for_ammo_box-1.21.1-1.1.0.jar
├── discord_chat_mod-neoforge-1.21.1-2.6.2.jar
├── diversity-neoforge-1.21.1-2.5.3.jar
├── does_it_tick-neoforge-1.1.4-1.21.1.jar
├── dragonlib-neoforge-1.21.1-beta-3.0.26.jar
├── dummmmmmy-1.21-2.0.12-neoforge.jar
├── dungeons-and-taverns-v4.4.4.jar
├── dynamic-fps-3.11.4+minecraft-1.21.0-neoforge.jar
├── elytraslot-neoforge-9.0.2+1.21.1.jar
├── emi-1.1.22+1.21.1+neoforge.jar
├── ends_delight-2.5.1+neoforge.1.21.1.jar
├── entityculling-neoforge-1.10.1-mc1.21.1.jar
├── etched-5.0.1.jar
├── exposure-neoforge-1.21.1-1.9.16.jar
├── faewulf_lib-neoforge-1.21.1-1.3.2.jar
├── ferritecore-7.0.3-neoforge.jar
├── ftb-library-neoforge-2101.1.31.jar
├── ftb-ultimine-neoforge-2101.1.13.jar
├── functionalstorage-1.21.1-1.5.5.jar
├── fzzy_config-0.7.6+1.21+neoforge.jar
├── geckolib-neoforge-1.21.1-4.8.4.jar
├── gravestone-neoforge-1.21.1-1.0.37.jar
├── gravestonecurioscompat-1.21.1-NeoForge-4.0.2.jar
├── guideme-21.1.15.jar
├── gunsmithlib-1.21.1-5.10.0-neoforge-modular.jar
├── happy_ghast-3.0.0-neoforge-1.21.1.jar
├── immersive_paintings-neoforge-1.21.1-0.7.6.jar
├── invtweaks-1.21.1-1.2.0.jar
├── iris-neoforge-1.8.12+mc1.21.1.jar
├── jamlib-neoforge-1.3.6+1.21.1.jar
├── jei-1.21.1-neoforge-19.27.0.340.jar
├── kotlinforforge-5.11.0-all.jar
├── kubejs-neoforge-2101.7.2-build.363.jar
├── letsdo-bakery-neoforge-2.1.6.jar
├── letsdo-brewery-neoforge-2.1.9.jar
├── letsdo-farm_and_charm-neoforge-1.1.22.jar
├── letsdo-herbalbrews-neoforge-1.1.3.jar
├── letsdo-vinery-neoforge-1.5.3.jar
├── letsdocompat-neoforge-2.3.1.jar
├── lithium-neoforge-0.15.3+mc1.21.1.jar
├── lootr-neoforge-1.21.1-1.11.37.120.jar
├── megacells-4.11.0.jar
├── merequester-neoforge-1.21.1-1.4.2.jar
├── modernfix-neoforge-5.27.6+mc1.21.1.jar
├── moonlight-neoforge-1.21.1-3.0.5.jar
├── moredelight-26.04.30-1.21-neoforge.jar
├── observable-5.4.4.jar
├── open-parties-and-claims-neoforge-1.21.1-0.26.2.jar
├── packetfixer-3.3.1-1.20.5-1.21.X-merged.jar
├── polymorph-neoforge-1.1.0+1.21.1.jar
├── railways-0.1.0+neoforge-mc1.21.1.jar
├── reeses-sodium-options-neoforge-1.8.3+mc1.21.4.jar
├── rhino-2101.2.7-build.81.jar
├── rightclickharvest-neoforge-4.6.1+1.21.1.jar
├── ritchiesprojectilelib-2.1.2+mc.1.21.1-neoforge.jar
├── sliceanddice-forge-4.2.4.jar
├── sodium-extra-neoforge-0.6.0+mc1.21.1.jar
├── sodium-neoforge-0.6.13+mc1.21.1.jar
├── sophisticatedbackpacks-1.21.1-3.25.44.1736.jar
├── sophisticatedbackpackscreateintegration-1.21.1-0.1.5.29.jar
├── sophisticatedcore-1.21.1-1.4.38.1847.jar
├── sophisticatedstorage-1.21.1-1.5.46.1717.jar
├── sophisticatedstoragecreateintegration-1.21.1-0.1.17.132.jar
├── spark-1.10.124-neoforge.jar
├── supplementaries-neoforge-1.21.1-3.6.4.jar
├── tacz-neoforge-1.21.1-1.1.7-hotfix-r5.jar
├── tacz-pack-upgrader-2.0.0.jar
├── taczjs-neoforge-1.4.0+mc1.21.1.jar
├── titanium-1.21-4.0.43.jar
├── trade-cycling-neoforge-1.21.1-1.0.18.jar
├── trashslot-neoforge-1.21.1-21.1.10.jar
├── txnilib-neoforge-1.0.24-1.21.1.jar
├── wwoo-2.3.4.jar
├── xaerominimap-neoforge-1.21.1-25.3.13.jar
├── xaeroworldmap-neoforge-1.21.1-1.40.16.jar
├── ysm-2.6.5-neoforge+mc1.21.1-release.jar
└── zipline-neoforge-1.21.1-1.2.1.jar
```
