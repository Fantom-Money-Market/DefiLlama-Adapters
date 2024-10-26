const sdk = require("@defillama/sdk");
const { sumTokens } = require("./helper/sumTokens");
const ADDRESSES = require('./helper/coreAssets.json')

// WALLETS FROM HERE https://wbtc.network/dashboard/audit
const owners = [
"31oMgrBjhbAr1ZZjFUFYfDT1ZYvx3Qp9qL",
"31qyn946XELbPKMaSWhk2SfFN8ikqLJ1GY",
"31rYKY9PysQgRoc6eB9fwJ3e89F5dcvRM4",
"31sADuWnUApAxzXJZTaEziCn9DhZVUajwK",
"31sW8NHLr9MELRdoGPWrEk6wBd1pj2uzkB",
"31x6dwHmXYHqd7YiwvJNPX8ryvDj8Cdht1",
"32Cav9GPxma3wRprn2FtPQ7gxmCZ8ZEmzv",
"32Ks4Rtb1A5NtzexGq6zEeqHta6hoqvCZW",
"32Ver3t9feJgByfNLF8pggtNFPMf22iC3Q",
"32fN3YjNhtAzUjBHfTVFtiPBFPgy1MkBAC",
"32hJnfPp6ZDnmkJ3tosoo6PvEemFr1z1Bd",
"32hPQh4EMBS14BMutrW2WJ4V76yxuXHJdF",
"32iT1QaoQD61rZgCNLccNqAdbnx4HwgvZE",
"32m8wzKabRRF7o6JRXN1srLSA5FzND769o",
'32oLNY3suWAZvYTBeAaFFSk32rJtS8w9i8',
'32okkzumvdoocdjN18SzbnTTNd2omQvvt3',
'337ot6fHGs4NCZwg2cKwShhrYX46g8ACtQ',
'33K5r4QntjmmD4mzSHq3WQJQtf4Dw8jvcZ',
'33PbQFD2eAouKnKVTBvZTFWE2pRzLgJdro',
'33ZA8VjwL2oucQceCP9WLEVunLkLvhaaPb',
'33epzdB4nk3FWHtUpHMQrzTWxiehSti11v',
'33gNdUGQTBT7cUbNx4892keGA2L64ixrfJ',
'33jqiX8NtPd8empn7ibEc2tn25GUx8iUE8',
'33xpP9NhBBmQt3XS1mD2g4pi1FZNuUFVR8',
'343uVxqsriiveWxekC6s3mNaERzsbfke3h',
'34CyVpeNgNNEoBdEoSSH6aTjrUZDavaUtr',
'34MPipmU3suumfX7WxTUTxmLX2uVK1Np8R',
'34MSicAL7qVGkevFPLwyc9KohGzoUSnu3Q',
'34Qg9U75RNPqAmZzF2amJ1XNGQyVek7HkQ',
'34whRPeeSYTPcihybfXmkG2uoShUdT3d2d',
'3573rMHLB3VABY7VaXMWhRoCBVspLGC4xV',
'35AY8sKs3yt3FbZpsmAtgvSXBZtvqqwc8e',
'35HfRwMwqB7sNTwijoG4fGHBmfWMm48aaB',
'35LMppVy98ofPKeUXUk79FUSkVC8yiXHUF',
'35QASqiGmQmHoccRc8pk9EtPVDFZDrFA59',
'35ULMyVnFoYaPaMxwHTRmaGdABpAThM4QR',
'35bXvntqjj5LnEpRVqU9bLcAPtT9crggYj',
'35cv1mcZBJkvkjY2KQSdmbo7Mq7E2yEVZD',
'35dn2Sfsi9qmqZke8SfSVcaggED9uJYQhn',
'35sfxCN1Gz37dq9KkpTfW56W59CK46JMY6',
'36RYMHxKrvNvrFcovZVXEQWC11LLbPE56V',
'36U3VfLRN9kbQQXRGwP5SGUYebSB3MqVnp',
'36ZsF5YgJDW25eZKS6gnZMqW4gr6wv9xp1',
'36h9DtMdqYWTxSg1yys2exZPFQoQXv8QRL',
'36jGhq48YgvjJWtEpqrc57QzXcBJQyCsS7',
'36jYq75ewM9AMTfnKRTwkPBBWwJtGg4CsE',
'36m2gCFRpkikK6AXUQGKLabKmd8PMjwx1Z',
'371SbkDHpTvRuYTwayWsBNsXK93Tj4sDAd',
'37Tgw6PStVEAyfAJT8yEvLAcxkoRYK3hDz',
'37Tob2tV9LRVzJng6Z4YCLyPsmq8n2xMQi',
'37aZoS67WApGWTDsn2rYDsxebhTdZSR1sh',
'37hV1tJYctQLPin7vCSjpDL34PpiiUTyTx',
'37kFT7mcJqgkqKbd66VbgkHSQgnys2V7hp',
'38EovPeRhGniW3cpYLJwptCqJkx9Y1Pg7G',
'38J1ce6tPUgy958VBkGGa2AmFU3LQLJ2Gv',
'38R6URq21qncKbYiiRXPi2MVx8xYRgDtWD',
'38b9cazfu4SxqoahgdiHEMSo1aNDdKquRm',
'38bzm6nhQMFJe71jJw1U7CbgNrVNpkonZF',
'39P2pJ9EmN3qmPAm1TTZPzp6T5LSsJq3eQ',
'39RMkGSQUQjifV2TpgRNYW73JK38xwA3NJ',
'39WQqCosC8ZD4S9XBPHRnnRUeVRvNctnnm',
'39e7mxbeNmRRnjfy1qkphv1TiMcztZ8VuE',
'39mayj82aZdb6UWs9qQAZZrC3VzfxUQP7c',
'39pEDUwFFj28sN5muXrmT5mAbDJSf6qEL2',
'39ydxDT3H6KygeXQn8f1tYXk6BtCTrsutw',
'3A25qkpmhCrYGEZh39wc71u89dSXGCYSvd',
'3A2wJ7LBiR4NhPbJSLNVfzZk6vDeYYPrit',
'3A37hJV9JPWR4UMCXC3QvKSeVGiRwgGtiU',
'3AKea5UYSyMc2oRRdQYhkn57nXWMm5woDz',
'3APCmmVbkpKSmLkTbGUvdPUyfqA4CZ25a4',
'3ARRJS9VNVkMdiESpxq2AGfpZUQRUvdGgd',
'3AdKaaTBFPQgpFen9YERPmrfV7QVvkYQfp',
'3AfJyKGXVBUcaWdyJeWxsasq1dHPw8pRZz',
'3Agd6vor95XcHvf1MPKE69KEpNbZTKD6JF',
'3B9UDWZNPdtL81JLnnPEJoiurcmaGx8DZm',
'3BCWh8prqQDsZDi6Pmvut9HJrhii1Vk7Ak',
'3BCm2gVB29QDFLWt768jjTwKoe1N1QVwSU',
'3BJJ68V6H1CoEx4MWdhqVk2kFpPUNVbs3T',
'3BPbdokvatbZEFJHuVUstG9zeSDLr5RdvL',
'3BTqdvZt5MYYWLAGXt8psAMSAa8Gh2AVPA',
'3CDy1xZavmpd27jV6TZm5teH8U6hrdXRES',
'3CPEGQzA227hHR2jUf66MdgBJ5wPnDdaW9',
'3CQBneh4TJtHGUP4QS3mfJc75NoiGgKwV3',
'3CdzzKFGY7ZahrMCM1tBgoxrgSPUWX4RVY',
'3Cr3vRcZD5q4XbXCVTo8sFCN9Xb7z5isth',
'3CrWGaRncSudU3EZPEhvWqeU2PG1xutr5x',
'3CuoRMhRXvsxdYsNL4kmKDJyAhaDB7SmBn',
'3CxK8MVHuqXW85z4MF7A4FYk8k6jKPFgPW',
'3DDUy5Ze4TaqKFpktAhHcmmffz9KKGtTrb',
'3DJNy9xMcMsNdmdipTgqME3TJCRkv7uS2g',
'3DhbEcm1SuJjTRxZBXxHyceYGm7GdRB2pM',
'3DiJgisVit4pqj4ByKxi5p1qdjGDxpGfR4',
'3ERNo3RAgP8o5jqELPKUEV47ADm4JtvKBd',
'3EedqW1fD4QRFmrPgkZZZvzHRzj9f4xVSX',
'3EmKqHZhXic3TymhuY8NLS7Bdk91erm4V7',
'3Epe1CixppBP9QSQ7DkvsWNKsgifTaxMY2',
'3ErNFK17MbH3GAGfakMwTrKo8uHmBuuVX1',
'3EuEvwodW88xEuwecsLb76x16tLxcUZAxx',
'3FDtvkk7hpZq5GuEJxt3Ps95vjtdDEfJ4T',
'3FFgKaYkEf1M73QtzuY9DGqC7VeM2sAQhT',
'3FHRnMSaGMAaLcoHbA5EVcEuYVxTEZdTyp',
'3FKkCxSZe1c4xZiVyJVBTbvzs9Lj1snqVC',
'3FVsTChmR7WYgfnU3CAmrrD3kqmaRMaJCC',
'3GE2pWumzKXnNMA9PFggsBwyk7NYSJvGGg',
'3GTk9xdRHnPQ61Pm7Jnv2Z8hsXv5FMVyeY',
'3HFrW63zQ58PypYhSYgHB2gij5VirsyRAm',
'3HGSCuXjnfEncUCPQ4GzNrv3BHcmLZFdeT',
'3HHLh4HSK8wj1w3YW9i4Chdnuybgadhpz1',
'3HM8YGKhwwnZKmrUEoGroEgaG3dv8xkVZz',
'3HVCDPPbAqiRwRjXhvu7PSDkLGgEajexuH',
'3HaHcbNmhJKgJ3dtbm2tg8XH87BJkRx7QE',
'3HauLvRoUBueiiLwebk19w6rnUTYJkdwNW',
'3Hdj2n5DEKPGsRd5md85exAXdwnRbomWTy',
'3HpHptRrwK5x9i7uULvk116QhsAnRJfJb8',
'3HziaqLNy8PpyQFLdwr2yxCjwEjRUjN6Eg',
'3J37HnDBzWN1sm65mbD9U5zvKrp2bzhuYJ',
'3JDewabYE785vTmaQe3MuHvUvEZJQTx8HU',
'3JMDjCYxxi5MF3aXRx8Dg13Rign3masTXj',
'3JcNkH5QWYuSfiQYADq4yV2hAYnQ8KC74t',
'3Jj1juATP11jHfBvRiu3BbzdJCNeRskqzJ',
'3JqwUY7pUwEWu2hz6mwzZKSQnvKyRRXCQM',
'3JvmhjuxvLVM8NQzAwwMvzWAK6zDLQ5Aor',
'3K2mpXMDFe7cT1baogitkRGeXqCYeDw6J5',
'3K43ux5cCAxfKgymq5eHnHS1toC9nrERbT',
'3KAGrSyTsKLckBgN7AiAfojbScfjGAHwFz',
'3KT7jvZyvhok3fkZt8Y9w8tcqpyQW5Jg8s',
'3KTeq879YjzhqkAXzZmdapJAVC6qz5qEth',
'3KWe9k7TG2j7xNw8BP9YHXBeHy1knC1xGS',
'3KXKTXR9YxHuhm863nqnSrKznkYtcx7wC7',
'3KeG7RzDwGaTywRfQgPCQaeyMgi7C89eQc',
'3KwPoNu1FxihhyRKjv1VG6C3FPy8vgjyse',
'3Kx4doXvL4UhDrKJqn8FoS5wVU3VeS9ebM',
'3LScoRmRA3kknxF5dLxz6wfw3z4LXRiVyT',
'3LbLR4uiq7RFrWgDKHfdgktAC88qtwY2Li',
'3LrxWneLHwvbNrMKXorkc17wxHqCCpNGkq',
'3MJ4rpTvuiTxYhTppNx7NokNUDZg26ofi1',
'3MLH54DXCtmydRocRZz9pEkfTTGWribBa3',
'3MM2BiaXBACfKUtVsyNr2RDXyNEhunez6v',
"3MPcUSHeWCSxCUsJtTS2L2zZfWLvorNFef",
"3MUJjyx13waUriNPkVnemdoJAiJT6nBmef",
"3MkzCjZjodyaBXz7W8i9NTjduEdykdkd89",
"3MnCLWSq31hetgbVA1Xn1VxVVb31SPeSKa",
'3Muz5dT5EguQgTiXgQ1eqJYNkjjQuSMgsb',
"3MwfxJqsy943oqYhbdKiaBrFSK9xbyiAi9",
"3MzRi499Cbcr4795iRnznfC97EFji23h7n",
"3NW5tDLFceDb1a75QkGampkuuceZ3YPMUX",
"3NfBFZRgKfHVJy7rSTutZyGpa5M2GpRdwu",
"3NmVi1xVYZj5YXU8wcQyoUfcVRCLcYhqqQ",
"3NsC2NXzKum7sVWQLQ3YYB3o9JbTz5FoaV",
"3P4EDeK5fxCLEQzM7iQ7n95DWgG1cXSaqG",
"3PRCCQMdWwjEKy89iVdL8LouknsgygwWpL",
"3PRHbh8ajUXv5wPD11CxFRs1hWBo8vR3zW",
"3PfcB36gDa47YkrbRtzZSwmrKSMsBSrhr6",
"3PkGNCt85M3aNQkBqiT5Psgmz8FjNujEKK",
"3PnoF45bZhJcPKGLf4nQzyQVAEFsxBxQQa",
"3PxV5m54ZwMDheUyFecvRVQHJK7WG1t49V",
"3Py2iN5SEwSCtT5QHkDU1qhbvmdmMZ8cpK",
"3PyK2LYBfYMUXsa8sMhTSHQZ8StQy3Xoz8",
"3QSd3JjJ35VAf5Shv3EPVpGCi5eVMQr6dk",
"3QWaxXXXbobqpWprekwzANeFuNrYXmaNXU",
"3QbVP6bTSXN2tXG66MTKtHtiJ1coKXnrjP",
"3QdyHj1i4y5CywEFWJ5PwoqGzDxGyJGPeb",
"3QjqS6A7uyoCx1vcXQoqtLatubFmsHe1ps",
"3QmVyCw6YnEvt1jXLeF5863uHPLRaKhWs5",
'bc1q02kjkf8gp628thqdfrm54tay5pjw05w297d6p6ez5andhp9gf0nqjaa2e4',
'bc1q02py7892mlqafaz9wevclp8ve4dl4z6hy4sqp973sz2u4fvpxnmqnzfc2f',
'bc1q09z8m23n7w7gtqsxpgwun0zvra9jwzf4z9c48cezq36q3zvmsuyqdmyjkn',
'bc1q0vac8d7jkyds2ux4jqwu6mu943z8keyxq4twaw8p8md8j8rtj94s9wrrl8',
'bc1q20yv979atkvtmecs5kj88a0pmf85ht500pmp7p2ztd54tz0u60psj7c702',
'bc1q26ds9juuyjtsek5czqasrvmptf46xan2hfyx88jqzpz2pzly3p6qrwd6e6',
'bc1q2az30y4lst2x9wlu77kzzdym8n9qr77n0kqmevs4ahf7dmzw624sck5vm5',
'bc1q2ssdu5v40zmntqc76kaxw0xf67eathhpg59xczh9vpp2qlf3mdrsgr49s8',
'bc1q2vlwakkk247pnppptdv3kgxj23yptykyd3ge9vvlk2w8h98v7pysmmknxv',
'bc1q2wyzh5ex2cr7wcth0zsm7ueycg2rkfw28fy2g6axky6r9su9zcls8qngt2',
'bc1q32phcv5dhwkw59xljxsz2nw8g4he4ssduw7c6d3d6005skfy9gysa6crgk',
'bc1q35fxxu53qsmv77cjt6ucdj5wu4r8rae8eakq5j5v8nzgjtcmnpvqp6g3sf',
'bc1q3aqsr7dsajmslelacclkgmmyhd7t6hkeevpw50f5areathvfmwnq4nwt3y',
'bc1q3cpmjfcfkh8t47q99y5wgwxzvhsw8lywzgvnvnlrlwe6h8xcqw7qjwf646',
'bc1q3cpz06gvfatn0rgamwk7lws7c7qyt4napdr6h7fsj54zg2fy9wtsahl7xt',
'bc1q3eff85qd4rhuu8gvn933fvtzg0ys3y5amchq8wzhhylhqvfh8kxsu4kde7',
'bc1q3l6qerg2gyzxpuk0mmhswkgedrqcqe3eesyhatwauyv980syulfspttjcs',
'bc1q3qw5de93m5ukxra5md872kjyl29arplm8c4vrh9jggsxp88kk2zs74u39g',
'bc1q3uzg46kmqexn04rkhsd74t34225tqv88xp3jglr2hpxxu5ujrwyq9amgrx',
'bc1q424nhx6tpljt65aren3q5hmsx4dwt22g9574lpjnlvtc309gtkhqdtwcss',
'bc1q47vlc3v9vfqh2sr8f47ukaws408wcr95r27t26y9qxgc72yzg9hs58yzek',
'bc1q4agva2hg94cdr7xdeg4e7wekq0vkrqggn4kqruns85e69xtx750s7dc2hy',
'bc1q4ma898qglhvqsjs725emwtmayr0pwj9nmgguqac44styjpjc04ws8hwp7k',
'bc1q4nalse7wwqe6sx3slmkyywetlzn3tdud77jesadx02v885qjs74spqtg5w',
'bc1q4xmshjnx7up2940zld0dls42jnec86drca3ph7cjhtsdlfgq3ycsntpvpw',
'bc1q5anhs0xpsayee84r5yqazljkfn9k92d6dkjfpyq509sfmsdkhfts2vh8l8',
'bc1q5d93mqzlntc95687tq2un302rnfa6vnlnche7pdxzuypyl2cewnsqrzxc2',
'bc1q5nzdfhdjv6dh5r2pgdmtxhvkan8stl2h7zrhth908slszrzu2snqm3ds3q',
'bc1q5qv0gtcfdumqrf9fjhd82uud7whpsam7j9e2dq3k9jy3mj2rm3aq8yj3u9',
'bc1q5rxwzkcl9hux2ltuppg5jl4c4ld52l3hk7kq8g6qqnjluk6kq5xqp5dpzd',
'bc1q68r3tjqwch4q5nyqf03a3n3ugcef75klsmqfa4g72k63npwn59hqj2d6hh',
'bc1q6aw25ef99245cxc4l9m5nvn5fel6tmrze3nfxtstv08yf5jkdvfs5rrajc',
'bc1q6xdt8tmlp5p6exvsmuf62yswm4vnk0rmm950sdhlqgyxluahv3qqquz3uh',
'bc1q6z0cm8gzhxz87e5xdlvkpnldj9zspustx7hedll73zg4n0hqemhsrm4d8l',
'bc1q7awsmqawsstwlxtt48lt6y2hv2qjsju85jgz07yr4hhdcu5df0sqwxc63z',
'bc1q7h0eyvjp58p5wz563p04lhjt2nef9q089mcdchr9jzz74lq5wzusqckmj2',
'bc1q7trechgv0g6kgwdcu3wsxkqn9lrc6edzdgvdvpt9a9rg04l7gtvs26hps3',
'bc1q866pgqwgxvuqvqmkmcfh8n52dtgz3fv3nh5cq3mufqv0ssz8q93qc2eadh',
'bc1q86aapgzcr7078499tlhp4aatylujug9d2rxwccaekmjgv8j6f93qljjhx6',
'bc1q89mxkg0dhr3m6vs2gzr3wqccwpzrmnpsldnjc22ztldhqueawtzsq82ydf',
'bc1q8nr29r27mlkvj0duseshuw5vueywt4640tyrt9jusrk0c9kz2klqg4n66l',
'bc1q8qlz3znvuq0mk62j0dld5hj3a5uf2y06tcuvtz2x3gffs6gxejnsx2hfk7',
'bc1q8sw5c5sx3s0r5tujaq6hahnjq88yvrdhepss7qdfaz5evjux6nls63mnuw',
'bc1q8xamcp8xc3rdh4vqtexgrqfmwlkw0mkruz3gkwaw027erjsrnd0see34cc',
'bc1q8znctxhsh6knhp07z7ufw8zusucef9vxq7rjrhgf0wecxl7aqcrqz06gmu',
'bc1q93hcme2prs7upr9zkdakl85jje3leg8g2qf70kstacjuyzy95xkq7h35ft',
'bc1q99gvfs8e2fsd8zw74wdg4fmfg46n2uf5pjlpt87h93qar044rspsxwck6k',
'bc1q9eammdvuqyhswd3wqp84d56ah0hyuus62smarhsdw3l3rycjgrhqsskvuq',
'bc1q9j8l760q75cep90p9gq6dsj3p9d55ewpwkhcmw8dnzcd7tmfg03sc0vmqh',
'bc1q9xlm3uydvuu3nn8dan0zqyr7e6p3pjh7gxnw7jyv0tujl44dgt6sedtus3',
'bc1qagrn5sn73azr85navkf0ukh336qvktfunejkzauu9adsuvfvpklq6qut3m',
'bc1qasluf865jx838k9nad2r2rnp04w3txqtyu7kapuxrv0m7rv90sxqhvjxuv',
'bc1qc342v9mt8j354pjyaqkweu9nrztcj6cc8udgyezk7dxhjddjcn8q7w9fuc',
'bc1qc46r9xy82z23s6q9lglhzf60fdxxq5y26x34kdx7dx8549mdtu4slym95w',
'bc1qcd7jv45swrxgwlj55gfnlxf3tvsm4ek0yer4xac5a909jtxzrgvqyv5v0p',
'bc1qd7dd9qc0pehqx5a2arlpmlgh30xpfufx9hpf2kfrnpqz2x7jl0xqpmcru6',
'bc1qd8wk5eesxtynkrjx42temma0spfy0955tr5e5lp267aqhalvpjwq79l4yh',
'bc1qdj65qknp4cnvxagp0pqnjl3g7d3s8gzxqzrrlh6gutju0ytdfwmsfeetdt',
'bc1qdt0gu9n7ykyvyhe4v7cmftugsn5qw59rm4tdxn4f8vxs6s694n8qp9u2az',
'bc1qe46f05uenszej6hvzmxjw8fxyskc6utv4cueeaa77jjea87vjh7ql8wgd5',
'bc1qe4we3wxhj4f0wy40ftfxfvawmt4hgkgvtmpnn3lv5wme8yzfrltsckhg9g',
'bc1qer4qvha5nxz09qn7gt7xntvrz2crnaxrd7ju4nmcjm7r9uerc9xqa9gdxd',
'bc1qesmtfxs4n4ws86242uqpztseyh7l5tgswd0zce5nggaky44t9c4sfwczj2',
'bc1qetecvjtaya283z7zk9lftqtv03ajx27ekz6uxjpscpap7crkvgmst355jn',
'bc1qeuz6l0qusf9pd923v8w086j8umn765a7hqvu4su0dfq90ckym47qhvaux3',
'bc1qezmmhc5k7ccnc6q7l8dhkg9phcnehysq2y3ahdzzcweph5ang9xs0egasc',
'bc1qf5p8wp6neu0raugt6t7zhm6vjhy3taf8q7rqwuhgdmdnhvpz2c7s8xtrtx',
'bc1qfcxzh8ag5pv37qywg8wylherg64k7skz0qm0ghc36x7awrd8xszsfxc4k3',
'bc1qfenuya7nskcjlyxpg0gttrjap9e5gtncxga0vvl8rekyeup55n0slzlhr8',
'bc1qfeuww8le80ae7qat3kpzspsh7pa8na3qx9fuc4qpdt3w5q3dkavsc02wk4',
'bc1qfn70w8peuvvywupd8u667g832necv3w6sqellzvd7aaj8l52nhhsfzs6a4',
'bc1qfpwewuyg8erj2cejamms0682v7ncgdgufdq8efa0maef3uzunkgsvdwyzm',
'bc1qfugah0e9fw9ze34dpqf22yxqxnxh49wrcq9d3kuqc9dydfhn4pjsjqfpky',
'bc1qg0amsvtlglecc6x46rzjprjh7wscjzlgqu6n52zw9nz0cck2r5sqwew946',
'bc1qg54vzuplejd6ymxlma6q7rfyc9zqqes8wvz4xs09mhpclak9z73sf3x3km',
'bc1qgs30czhkxhxn5qsunlzac0xeznyaxg267p5t8gjupzg7u97vz4zqyuf60l',
'bc1qgsgj3dh8dztq05v9dzethjcpjqtptm5tsrruprz4w7awzpfrku8qjjegyc',
'bc1qgxww03juwr8vfp28tzpmyyku3j6hxrgpl0v6natkk2ucwu4weweskcqvnl',
'bc1qh4r87gzpcx3lz7faz349yvp8yr6zyr2706m2xzsuwcwlptkqsj6svkaqtf',
'bc1qhagykgzhhh7yt5knsypklpqsgdelrvw5vz73erujapcgh3x5wxrq8c0y9x',
'bc1qhgfkccy09hr7hlky0jeyz89afan8qh66wa26t4se4mlqda6298hqrtk5zr',
'bc1qhkw43w4cvzec3836hqrdmxksm20l35yk7gnvysqprd6gareztfsq4uplfs',
'bc1qhm46vtwep0awkdphurmc2ku3lfp8l7z9f6wn9va42lc3z24zd2fsvnvzk3',
'bc1qhpnmnswf8ls2q97vg4qzlr2a6c2xpr46zp59e7q9uh5j59ask2ysld0euq',
'bc1qj2dz58v8etgq3aud24yrgffk73d9cue80kfswl58d5w4vvhdfsyskxtll5',
'bc1qj38tl824hkgl7qluy32lklp6qfd9d9zqa9qlyeh28khfh9grxwastu3xnw',
'bc1qj8vt7h7ufrgqlhhcu22vl3jrvx3kluml57kha352k9fex23jphvsuwme6r',
'bc1qjgua88vymvkctq9t4mcd4q4mlqnr3r07lylp90f7epc9p6qcv6asteyjec',
'bc1qjpgs63vqgfkalm8janwmelw4mr4wg50axnmx5ueh4ru2xnl3lg7q80yl32',
'bc1qk8plwr04uu6mvpcf3wtfmg579ztqn59q7yfx39drl9r97q4wcx2q43rvw3',
'bc1qk9fhnvv7a0nxzxxj503v7mfy3uwdugymj09ugkrda5895cfxa5vsnzp8l5',
'bc1qkd53jhtmhwv74x2c8hnnfzspatcjdzk0h3f2czqzrav0yxpd5y4szkslrs',
'bc1qkn3s4hzjthfmt68sk30m69knjauwphsha2paqzexjjmlfc6h7f3sggfn52',
'bc1qksptar8mpay2mfwzwep3aqxevnc8jj8d4rd82v3v0hm5p3y93w2q5eufa8',
'bc1ql26wgacxjhuefzcph2wpsyftqzd07kzkczv60d85hj7280qkrz2qlgrhf7',
'bc1ql33nnw3ngcf343jtmzpe8ps8809nqe0530rv6neu7cefkz6dtcfqn3wzav',
'bc1qlg2gcz8hzfdt49jgs0438c7ahg4967nfkflzj3m0r5dz3xz7njrqpxxj2j',
'bc1qlnz5vejmvv6sdy9k3c7a07nlf6c053g0ren0m8kmmsrx677nyllsg6qr2m',
'bc1qltg30ayn5wexka07ta2x5dnfjf20rqnemf4sfnsase082yfqetfq0s20hv',
'bc1qmfjm5hlgjfw3tc6cz77nzjcc5xg5mjhrlm6kqewczapae2yhucrs5c0qvf',
'bc1qmfwcwfntr2adas7yz5l3wn6pnm8rj55l8fk5vgny34wld6d0vfcsg48tta',
'bc1qmfwq5cjm55m0kcfemjyv6rj8nfunslfjtuhyqawksw892dhvu6wscem2t5',
'bc1qmmdfeczme4q99ccpmgfx3zxwwwff9nnjhdux47hucwttrjdpqj9s2x8rds',
'bc1qmur9p99tzxtrq0232tl6nssyejrmwet3m265xg0cgl7uh2qxsy7q0m8fvu',
'bc1qn3r3kqf90txgcsdxzu2s0p5avp79axlf98lzrwlmpnmxc3ak0vwsuxrepa',
'bc1qn8w83eglpp7xdtgyjaysgrve5cjjr2yfhsq2x5xyn6cmvup0uwlsq2t5xl',
'bc1qnpnpcn4gwssvkjpe27zzfex2t997l7garmc2s8fenmk0fpydek2s6zp9yz',
'bc1qp24kgu3r5n3q6k03230yj6dzr4styppjlvtr3ptdsd7sxql8pcgqwall05',
'bc1qp27x9j8damzuxc0x7cqkcaf39q4825aafmx3g6mlvh2wd5tzr8kscsjplw',
'bc1qp6cmqa7hgdean0z8jl7uf20rzf7wgvstmjlxekft3l2vn22zwl2qhunr3h',
'bc1qparrejjdyc8hcd7hgljlx53wy7ncrjkaz670w3ef0ade369y22eqkujzy0',
'bc1qpdthtpfcmju642wq4eqxl4uz5hfgtztvtv7u6wrdepnkdsugueusujpg76',
'bc1qpp5wu443kdfur2vhzwms8d46gq8c2vgu692sgyn79z56gkq4mkvs07gjkd',
'bc1qpvvt2md0t7435mc8dmlgd5euyc0636vlw8ew25e8pf83uc68km5qpvqpfx',
'bc1qpwtgr4rld3wr39r762ngvuk8qgvgkrrxra4jdnmn06z4nfgh4vtsluyd3t',
'bc1qq3p9mqvegpadextyqzxy46ukf5yxc7ej50ksq3w63f895q0t8rzsfe5jym',
'bc1qqces3upduq6e0c2w0k6mr9n4tkgvzkggteuatqc4eyxawwkuxzpsfgdxzh',
'bc1qqjmfwnxrjx0khaxf8qa6ccnz7s94k9wa8lelpdy2fn6jf9ffks8s5r4frd',
'bc1qqlm6edz9azp0d6y4mjc8j8an4q8du2jajgwj65mmz6nkk53yannqvtnvnn',
'bc1qqlus6fyt05kewddukpge8u0lszp4ffn49mqnr3pvrh2whptf2fhsy6ynmn',
'bc1qqvf7qq7wvx6pkp5aqvzdxs0rgqkjgqe7ev63hnppxq05t6v3w5ysskzjs5',
'bc1qr20qujcyr87y3uk2fgkq93u0jtzl6wa4el90we4txgcwgx6avxzsuj0wcx',
'bc1qr6cvgewvlts5f9wa8u3cpnlmth0mzn0x96ap34hknpaayuyknrlssqfq3n',
'bc1qrm7nze8cqyazdlhmw8ffeusxucqtvyw3pvtple0047tdkupdnmustkla3w',
'bc1qrsayv4jq9uf6rpmwsxan3yqxuqtyelwt7k8298ejl8h9tkrunthspnlm6y',
'bc1qs0q2svqpeaka6f8jakx74j4rydxdmxq4wz7xfy45m6t8xfxzy0zsckrym5',
'bc1qs48aaups6tzwcs372yqhakcjakfgf6w6aguj0w7gex75vrnjegmsp5hx8n',
'bc1qsgthnvghgs9wl87kzhkx9xda4xyu35cxfteupjnvxv3zuvgtdyzs9a23te',
'bc1qsln2s8xu7sv84wj5sv2pjnfpev8lkcqpzmzukmygcll26vf0kwfs6awzkj',
'bc1qsp7twu469a8p3enevzwdnjhrcmtmc7ljydqxxp4p69u4ggj9wazqa9gsgw',
'bc1qsrms3khzhupjxph0u2sy6sz8c9q4g6nqm3dy53nrlagw3lc5zmsstg8pft',
'bc1qsuzvly8z6kr080at2twdlfs8j87gu08kmwlfstafm2lajdvfclyqtvq00a',
'bc1qsva32zdzx7cd9996qdlxkpl0dnyk4s44myx53zpetf4u7rfg89fswjzza5',
'bc1qsw4hj3dvqcvtntvsflx8474f52nt6zer5k9pyem6n6g27p8nc4xsrj5fxc',
'bc1qszmwz85wktn6k7tg953pugtedmssguaavl8qukv77s5u0g5mx3tsmw6pg4',
'bc1qt3mw55ccejx97tyjdl9dhe60wvextxddg8udxz9n8q8efwhr37wseag63j',
'bc1qt4ck5563ra7r3xjqlfqm7au407q2dmc0p6wvgyzy239nyyn4vsesfwwsa2',
'bc1qteyfers4wvfhp6apw4s720tzvp9xafkvvfh7k0sxmu8vrxvt2m5snw45v8',
'bc1qu4g30hr7lz3qd9jn68x4f2ycl3s533jdtv96g5n96d40kac5l5tshhkvq5',
'bc1qu5k2h4y9cynds4j3t5d94xg78zpzhx3elk6w93e28xmxrnn37wuql9xf4t',
'bc1quljnxvuryumd7c44u7f8dwflas5aghecg8ln029v2s7ffezun86qn0wyng',
'bc1quryt5u9j5rec96c4h6xxatn74nqcen244q3dtgwtpjkma36vvrmq9mjecg',
'bc1quxy0mlwssdmzsxgk2ct42p09ef7mc9qwmpdjuzy9f3h3ye2k6jzsvmmrsh',
'bc1quywrhxx6t7mkqshcll3q99qrqlal73l668wldgrcxpa4yvuj2x3qrhsg9m',
'bc1quzwyq3wewr74vvgwa6nqfj6n6rsc2tsh046glq0n76x9alcpgmzsf24s6x',
'bc1qv0u3a7jdaygq680cu52puk4xrrr4ckpjqqgg88x66cmfnrfj5c4sre60e9',
'bc1qv837fuujjlu50z3l6y48vxkv4vd09vve58t92welmxy9lnu5l2usp6hd0j',
'bc1qva8lqtdcemj9swc6trk4je45xzckqhs3fthst2hy0k3plywfeq5s639wn0',
'bc1qvfmnrg59p8a3csj032uyzl3mdtv5y46g3mx33krz5kweyvq78f5swvdmna',
'bc1qvqaqr0jyxf3nphux7gla78dqa9psfpyy0v8med9t63f0x6n2k40s7knecs',
'bc1qvtckv82yw4efeu9ez8y37rne5ghzxeqjl3cqnsyxf4gm3zhuhc8swt5u3h',
'bc1qwdgyle9p2gcvyn22sg2tg6jaqkxewjz5xfj229p989dcteu42adqnau2lw',
'bc1qwfeq7rehmzm5434vaa485s98788cmyyrac2w65nulvucsg7cueesly7x05',
'bc1qwfydpavg240d4j87nrg0ayqhfzwrt9revzw7a9dpyxujnlpu2xus07f6ud',
'bc1qwvrrxxqhc6l9zd8rwj39sl8n39v69tju9sfc59dqxl3fjx8jnfqswzs93f',
'bc1qwwkwppejx79uszdgfrpaaqc24wepvjy729xhx2zyd3qyf3ftfqrs672m9d',
'bc1qx8xlxd6qnmqprgjs6yr4nd870tt4d8yuupwq4qhl3hh24ulpmk4qem46px',
'bc1qxfkxl66ee59xpxr30tcexvh9zgtvf7gwtyauj29n6txj7c7a9e9quhcaaz',
'bc1qxlj7ls9zptgj779w0gzfvt8chpl29xdcv5qjqdw7g462uf0c90wsvkw74y',
'bc1qxnxp0qdzx07jw3tskcp79xzs7p6p2wpwx4sn7myrx8vgj42f4prsrlcknw',
'bc1qxqnj2gdznm37yhdw679nx6rqs44hkd2lddj2gn4uyaa5htmjvmzsyjcu7d',
'bc1qxtf7mx5scgetaaz30w6ngndq8xctegjacvphz2tgky5r9et0q5uqwyks8t',
'bc1qxu9s6qy6hld9uvd75em9t550q7ppezsmkheldsyny0pzj9yd7e6sqg3qv6',
'bc1qy30syv0sqafmkt2m4h6lf9tjeddurh9cypa9p8wras2hfjf4y4uqzdz5sk',
'bc1qy6tfy7k9cjp40m2lcq2s8wrsn88jdn3ffj5ph7uvwxuamfntaylqk38dwp',
'bc1qyc4v5dtapyta9mcu5n5t9va72rzd9g75z83qxxm90ne4vzhgleeqf9lcfl',
'bc1qyd5989kz0jgayxelnz7wlnnk5gyn36v7cecjrkgvph4260aew2rsqzx3ua',
'bc1qyujyd6q7dtnh76wchgavwgxpklkwm73vqllududlx2uunx28zdhsxnvd47',
'bc1qyvpmf6uv8xgxrvcwc5w630d4vg2s9ztpd64fe0e9ylxtuy34e4lqnmv3sq',
'bc1qzck7505r8ahwq9g4xuwr60lpflxv5h75y0jntgasd0t9g7psvmqsr902f8',
'bc1qzgw25sgrn45909quqlydd9729ksj32mfcvwzl44ekf2kkgctz09qvr779j',
'bc1qzha6dcp9mq8ne7s3cxgp052qzux3jg25fp7cxpshrz0a0005h3gs30vqpf',
'bc1qzk7gnzhyqcl9x7f52lckdhlznv94k87gpm3fsafvn487euaymmasz95cwa',
'bc1qztewvcfe424fxat7s2uautmy5ctnsnurul474e2emexfnlj6upsqem0g8d',

];

async function tvl(api){
  if(api.timestamp > Date.now()/1e3 - 3600){
    return sumTokens({ owners, api })
  } else {
    const supply = await api.call({ target: ADDRESSES.ethereum.WBTC, abi: 'erc20:totalSupply', })
    api.add(ADDRESSES.ethereum.WBTC, supply)
  }
}

module.exports = {
  bitcoin: {
    tvl,
  },
  methodology: `TVL for WBTC consists of the BTC deposits in custody that were used to mint WBTC`,
};
