const COURSE_TYPE_PERMANENT = 1
const COURSE_TYPE_TIME_BASED = 2

const COURSE_CLEAR_SCORE = 1
const COURSE_CLEAR_COMBINED_SCORE = 2
const COURSE_CLEAR_HAZARD = 3

const COURSE_HAZARD_NONE = 0
const COURSE_HAZARD_EXC1 = 1
const COURSE_HAZARD_EXC2 = 2
const COURSE_HAZARD_EXC3 = 3
const COURSE_HAZARD_FC1 = 4
const COURSE_HAZARD_FC2 = 5
const COURSE_HAZARD_FC3 = 6

export const shopList = [
  {
    tex_id: 1,
    type: 1,
    emo_id: 2,
    priority: 1,
  },
  {
    tex_id: 2,
    type: 2,
    emo_id: 1,
    priority: 2,
  },
];
export const emoList = [
  {
    tex_id: 1,
    is_exchange: false,
  },
  {
    tex_id: 2,
    is_exchange: false,
  },
];
export const courseCategories = [
  [1,3],
  [4,6],
  [7,9],
  [10,12],
  [13,14],
  [15,16]
];
export const COURSE_STATUS = {
  SEEN : 0x01,
  PLAYED : 0x02,
  CLEARED : 0x04,
};

let raw_course = '[{"name":"オレのユビティズム","difficulty":3,"course_type":1,"etime":0,"clear_type":2,"score":2100000,"is_hard":false,"hazard_type":0,"tune_list":[[[20000042,0,0],[20000042,1,0],[20000042,2,0]],[[70000119,0,0],[70000119,1,0],[70000119,2,0]],[[50000115,0,0],[50000115,1,0],[50000115,2,0]]]},{"name":"はじめてのビーチ","difficulty":1,"course_type":1,"etime":0,"clear_type":1,"score":700000,"is_hard":false,"hazard_type":0,"tune_list":[[[60000080,0,0],[90000077,0,0],[90000139,0,0]],[[60000086,0,0],[70000047,0,0]],[[90000141,0,0]]]},{"name":"【初段】超幸せハイテンション","difficulty":1,"course_type":1,"etime":0,"clear_type":1,"score":700000,"is_hard":false,"hazard_type":0,"tune_list":[[[20000031,0,0],[60000100,0,0],[90000078,0,0]],[[70000125,0,0],[90000050,0,0]],[[70000106,0,1]]]},{"name":"アニメランニング","difficulty":2,"course_type":1,"etime":0,"clear_type":1,"score":750000,"is_hard":false,"hazard_type":0,"tune_list":[[[60000092,0,0],[90000031,0,0],[90000172,0,0]],[[30000004,0,0],[80000059,0,0]],[[50000209,0,0]]]},{"name":"パブリックリゾート","difficulty":2,"course_type":1,"etime":0,"clear_type":1,"score":750000,"is_hard":false,"hazard_type":0,"tune_list":[[[80000097,0,0],[90000029,0,0],[90000076,0,0]],[[80000093,0,0],[90000048,0,0]],[[80000038,0,0]]]},{"name":"【二段】その笑顔は甘く蕩ける","difficulty":3,"course_type":1,"etime":0,"clear_type":1,"score":800000,"is_hard":false,"hazard_type":0,"tune_list":[[[50000268,0,0],[70000039,0,0],[90000051,0,0]],[[70000091,0,0],[80000014,0,0]],[[60000053,0,1]]]},{"name":"シャレを言いなシャレ","difficulty":4,"course_type":1,"etime":0,"clear_type":2,"score":2400000,"is_hard":false,"hazard_type":0,"tune_list":[[[70000003,0,0],[70000003,1,0],[70000003,2,0]],[[70000045,0,0],[70000045,1,0],[70000045,2,0]],[[70000076,0,0],[70000076,1,0],[70000076,2,0]]]},{"name":"電脳享受空間","difficulty":4,"course_type":1,"etime":0,"clear_type":1,"score":800000,"is_hard":false,"hazard_type":0,"tune_list":[[[70000046,1,0],[70000160,1,0],[50000233,1,0]],[[80000031,1,0],[80000097,1,0]],[[90000049,1,0]]]},{"name":"孤高の少女は破滅を願う","difficulty":4,"course_type":1,"etime":0,"clear_type":1,"score":850000,"is_hard":false,"hazard_type":0,"tune_list":[[[50000202,0,0],[70000117,0,0],[70000134,0,0]],[[50000212,0,0],[80000124,1,0]],[[90001008,1,1]]]},{"name":"スタミナアップ！","difficulty":5,"course_type":1,"etime":0,"clear_type":2,"score":2600000,"is_hard":false,"hazard_type":0,"tune_list":[[[50000242,0,0],[50000277,1,0],[50000294,1,0]],[[50000260,1,0],[50000261,1,0]],[[90000143,1,0]]]},{"name":"【四段】嗚呼、大繁盛！","difficulty":6,"course_type":1,"etime":0,"clear_type":2,"score":2600000,"is_hard":false,"hazard_type":0,"tune_list":[[[50000085,2,0],[50000237,2,0],[80000080,2,0]],[[50000172,2,0],[50000235,2,0]],[[70000065,2,1]]]},{"name":"jubeat大回顧展 ROOM 1","difficulty":4,"course_type":1,"etime":0,"clear_type":1,"score":950000,"is_hard":false,"hazard_type":0,"tune_list":[[[50000277,0,0],[50000277,1,0],[50000277,2,0]],[[50000325,0,0],[50000325,1,0],[50000325,2,0]],[[90000014,0,0],[90000014,1,0],[90000014,2,0]]]},{"name":"jubeat大回顧展 ROOM 2","difficulty":4,"course_type":1,"etime":0,"clear_type":2,"score":2750000,"is_hard":false,"hazard_type":0,"tune_list":[[[30000048,0,0],[30000048,1,0],[30000048,2,0]],[[30000121,0,0],[30000121,1,0],[30000121,2,0]],[[90000012,0,0],[90000012,1,0],[90000012,2,0]]]},{"name":"jubeat大回顧展 ROOM 3","difficulty":4,"course_type":1,"etime":0,"clear_type":1,"score":925000,"is_hard":false,"hazard_type":0,"tune_list":[[[60000007,0,0],[60000007,1,0],[60000007,2,0]],[[60000070,0,0],[60000070,1,0],[60000070,2,0]],[[90000016,0,0],[90000016,1,0],[90000016,2,0]]]},{"name":"jubeat大回顧展 ROOM 4","difficulty":4,"course_type":1,"etime":0,"clear_type":2,"score":2800000,"is_hard":false,"hazard_type":0,"tune_list":[[[40000051,0,0],[40000051,1,0],[40000051,2,0]],[[40000129,0,0],[40000129,1,0],[40000129,2,0]],[[90000013,0,0],[90000013,1,0],[90000013,2,0]]]},{"name":"jubeat大回顧展 ROOM 5","difficulty":4,"course_type":1,"etime":0,"clear_type":2,"score":2775000,"is_hard":false,"hazard_type":0,"tune_list":[[[70000177,0,0],[70000177,1,0],[70000177,2,0]],[[70000011,0,0],[70000011,1,0],[70000011,2,0]],[[90000017,0,0],[90000017,1,0],[90000017,2,0]]]},{"name":"jubeat大回顧展 ROOM 6","difficulty":4,"course_type":1,"etime":0,"clear_type":1,"score":940000,"is_hard":false,"hazard_type":0,"tune_list":[[[20000123,0,0],[20000123,1,0],[20000123,2,0]],[[20000038,0,0],[20000038,1,0],[20000038,2,0]],[[90000011,0,0],[90000011,1,0],[90000011,2,0]]]},{"name":"jubeat大回顧展 ROOM 7","difficulty":4,"course_type":1,"etime":0,"clear_type":1,"score":950000,"is_hard":false,"hazard_type":0,"tune_list":[[[50000021,0,0],[50000021,1,0],[50000021,2,0]],[[50000078,0,0],[50000078,1,0],[50000078,2,0]],[[90000015,0,0],[90000015,1,0],[90000015,2,0]]]},{"name":"jubeat大回顧展 ROOM 8","difficulty":4,"course_type":1,"etime":0,"clear_type":2,"score":2800000,"is_hard":false,"hazard_type":0,"tune_list":[[[80000028,0,0],[80000028,1,0],[80000028,2,0]],[[80000087,0,0],[80000087,1,0],[80000087,2,0]],[[90000018,0,0],[90000018,1,0],[90000018,2,0]]]},{"name":"jubeat大回顧展 ROOM 9","difficulty":4,"course_type":1,"etime":0,"clear_type":1,"score":930000,"is_hard":false,"hazard_type":0,"tune_list":[[[10000038,0,0],[10000038,1,0],[10000038,2,0]],[[10000065,0,0],[10000065,1,0],[10000065,2,0]],[[90000010,0,0],[90000010,1,0],[90000010,2,0]]]},{"name":"【三段】この花を貴方へ","difficulty":4,"course_type":1,"etime":0,"clear_type":1,"score":850000,"is_hard":false,"hazard_type":0,"tune_list":[[[90000034,1,0],[90000107,1,0],[90000140,1,0]],[[80000052,1,0],[80001010,1,0]],[[40000051,1,1]]]},{"name":"雨上がりレインボー","difficulty":9,"course_type":1,"etime":0,"clear_type":2,"score":2650000,"is_hard":false,"hazard_type":0,"tune_list":[[[50000138,2,0]],[[80000057,2,0]],[[90000011,2,0]]]},{"name":"Rain時々雨ノチ 雨","difficulty":9,"course_type":1,"etime":0,"clear_type":2,"score":2650000,"is_hard":false,"hazard_type":0,"tune_list":[[[30000050,2,0]],[[80000123,2,0]],[[50000092,2,0]]]},{"name":"心に残った曲","difficulty":7,"course_type":1,"etime":0,"clear_type":2,"score":2700000,"is_hard":false,"hazard_type":0,"tune_list":[[[80000136,0,0],[80000136,1,0],[80000136,2,0]],[[20000038,0,0],[20000038,1,0],[20000038,2,0]],[[60000065,0,0],[60000065,1,0],[70000084,1,0]]]},{"name":"黒船来航","difficulty":7,"course_type":1,"etime":0,"clear_type":1,"score":850000,"is_hard":false,"hazard_type":0,"tune_list":[[[50000086,2,0],[60000066,2,0],[80000040,1,0]],[[50000096,2,0],[80000048,2,0]],[[50000091,2,0]]]},{"name":"【五段】濁流を乗り越 えて","difficulty":7,"course_type":1,"etime":0,"clear_type":2,"score":2650000,"is_hard":false,"hazard_type":0,"tune_list":[[[50000343,2,0],[60000060,2,0],[60000071,2,0]],[[60000027,2,0],[80000048,2,0]],[[20000038,2,1]]]},{"name":"のんびり。ゆったり。ほがらかに。","difficulty":8,"course_type":1,"etime":0,"clear_type":1,"score":950000,"is_hard":false,"hazard_type":0,"tune_list":[[[40000154,2,0],[80000124,2,0],[90000139,2,0]],[[60000048,2,0],[80000041,2,0]],[[90000050,2,0]]]},{"name":"海・KOI・スィニョーレ！！","difficulty":8,"course_type":1,"etime":0,"clear_type":2,"score":2650000,"is_hard":false,"hazard_type":0,"tune_list":[[[50000201,2,0]],[[50000339,2,0]],[[50000038,2,0]]]},{"name":"【六段】電柱を見ると思出す","difficulty":9,"course_type":1,"etime":0,"clear_type":2,"score":2750000,"is_hard":false,"hazard_type":0,"tune_list":[[[50000288,2,0],[80000046,2,0],[80001008,2,0]],[[50000207,2,0],[70000117,2,0]],[[30000048,2,1]]]},{"name":"コクがある曲","difficulty":12,"course_type":1,"etime":0,"clear_type":2,"score":2400000,"is_hard":true,"hazard_type":0,"tune_list":[[[50000139,0,0],[50000139,1,0],[50000139,2,0]],[[90000002,0,0],[90000002,1,0],[90000002,2,0]],[[50000060,0,0],[50000060,1,0],[50000060,2,0]]]},{"name":"超フェスタ！","difficulty":10,"course_type":1,"etime":0,"clear_type":1,"score":930000,"is_hard":false,"hazard_type":0,"tune_list":[[[70000076,2,0],[70000077,2,0]],[[20000038,2,0],[40000160,2,0]],[[70000145,2,0]]]},{"name":"【七段】操り人形はほくそ笑む","difficulty":10,"course_type":1,"etime":0,"clear_type":2,"score":2800000,"is_hard":false,"hazard_type":0,"tune_list":[[[70000006,2,0],[70000171,2,0],[80000003,2,0]],[[50000078,2,0],[50000324,2,0]],[[80000118,2,1]]]},{"name":"絶体絶命スリーチャレンジ！","difficulty":11,"course_type":1,"etime":0,"clear_type":3,"score":0,"is_hard":false,"hazard_type":6,"tune_list":[[[50000238,2,0],[70000003,2,0],[90000051,1,0]],[[50000027,2,0],[50000387,2,0]],[[80000056,2,0]]]},{"name":"天国の舞踏会","difficulty":11,"course_type":1,"etime":0,"clear_type":2,"score":2800000,"is_hard":false,"hazard_type":0,"tune_list":[[[60000065,1,0]],[[80001007,2,0]],[[90001007,2,1]]]},{"name":"【八段】山の 賽子","difficulty":12,"course_type":1,"etime":0,"clear_type":2,"score":2820000,"is_hard":false,"hazard_type":0,"tune_list":[[[50000200,2,0],[50000291,2,0],[60000003,2,0]],[[50000129,2,0],[80000021,2,0]],[[80000087,2,1]]]},{"name":"The 8th KAC 個人部門","difficulty":14,"course_type":1,"etime":0,"clear_type":1,"score":700000,"is_hard":true,"hazard_type":0,"tune_list":[[[90000052,2,0]],[[90000013,2,0]],[[70000167,2,0]]]},{"name":"The 8th KAC 団体部門","difficulty":14,"course_type":1,"etime":0,"clear_type":1,"score":700000,"is_hard":true,"hazard_type":0,"tune_list":[[[90000009,2,0]],[[80000133,2,0]],[[80000101,2,0]]]},{"name":"The 9th KAC 1st Stage 個人部門","difficulty":14,"course_type":1,"etime":0,"clear_type":1,"score":700000,"is_hard":true,"hazard_type":0,"tune_list":[[[90000125,2,0]],[[60000065,2,0]],[[90000023,2,0]]]},{"name":"The 9th KAC 1st Stage 団体部門","difficulty":14,"course_type":1,"etime":0,"clear_type":1,"score":700000,"is_hard":true,"hazard_type":0,"tune_list":[[[90000125,2,0]],[[50000135,2,0]],[[90000045,2,0]]]},{"name":"The 9th KAC 2nd Stage 個人部 門","difficulty":14,"course_type":1,"etime":0,"clear_type":1,"score":700000,"is_hard":true,"hazard_type":0,"tune_list":[[[90000095,2,0]],[[80000085,2,0]],[[80000090,2,0]]]},{"name":"The 9th KAC 2nd Stage 団体部門","difficulty":14,"course_type":1,"etime":0,"clear_type":1,"score":700000,"is_hard":true,"hazard_type":0,"tune_list":[[[90000113,2,0]],[[50000344,2,0]],[[90000096,2,0]]]},{"name":"The 10th KAC 1st Stage","difficulty":14,"course_type":1,"etime":0,"clear_type":1,"score":700000,"is_hard":true,"hazard_type":0,"tune_list":[[[90000003,2,0]],[[90000151,2,0]],[[90000174,2,0]]]},{"name":"The 10th KAC 2nd Stage","difficulty":14,"course_type":1,"etime":0,"clear_type":1,"score":700000,"is_hard":true,"hazard_type":0,"tune_list":[[[90000121,2,0]],[[90000113,2,0]],[[90000124,2,0]]]},{"name":"どうやって押してる？","difficulty":13,"course_type":1,"etime":0,"clear_type":2,"score":2600000,"is_hard":true,"hazard_type":0,"tune_list":[[[40000127,0,0]],[[50000123,0,0]],[[50000126,0,0]]]},{"name":"初めてのHARD MODE再び","difficulty":13,"course_type":1,"etime":0,"clear_type":2,"score":2750000,"is_hard":true,"hazard_type":0,"tune_list":[[[50000096,2,0],[50000263,2,0],[80000119,2,0]],[[60000021,2,0],[60000075,2,0]],[[60000039,2,0]]]},{"name":"【九段】2人からの挑戦状","difficulty":13,"course_type":1,"etime":0,"clear_type":2,"score":2830000,"is_hard":false,"hazard_type":0,"tune_list":[[[50000023,2,0],[80000025,2,0],[80000106,2,0]],[[50000124,2,0],[80000082,2,0]],[[60000115,2,1]]]},{"name":"天空の庭　太陽の園","difficulty":13,"course_type":1,"etime":0,"clear_type":1,"score":965000,"is_hard":false,"hazard_type":0,"tune_list":[[[40000153,2,0]],[[80000007,2,0]],[[70000173,2,0]]]},{"name":"緊急！迅速！大混乱！","difficulty":14,"course_type":1,"etime":0,"clear_type":2,"score":2900000,"is_hard":false,"hazard_type":0,"tune_list":[[[20000040,2,0],[50000244,2,0],[60000074,2,0]],[[40000152,2,0],[50000158,2,0]],[[40000057,2,0]]]},{"name":"【十段】時の超越者","difficulty":14,"course_type":1,"etime":0,"clear_type":2,"score":2820000,"is_hard":true,"hazard_type":0,"tune_list":[[[20000051,2,0],[50000249,2,0],[70000145,2,0]],[[40000046,2,0],[50000180,2,0]],[[50000134,2,1]]]},{"name":"jubeat大回顧展 ROOM 10","difficulty":13,"course_type":1,"etime":0,"clear_type":2,"score":2850000,"is_hard":false,"hazard_type":0,"tune_list":[[[30000127,2,1]],[[60000078,2,1]],[[90000047,2,1]]]},{"name":"【伝導】10代目最強に挑戦！","difficulty":14,"course_type":1,"etime":0,"clear_type":2,"score":2998179,"is_hard":false,"hazard_type":0,"tune_list":[[[50000100,2,0]],[[90000047,2,0]],[[90000057,2,0]]]},{"name":"あなたのjubeatはどこから？","difficulty":15,"course_type":1,"etime":0,"clear_type":2,"score":2900000,"is_hard":true,"hazard_type":0,"tune_list":[[[10000065,0,0],[10000065,1,0],[10000065,2,0]],[[30000048,0,0],[30000048,1,0],[30000048,2,0]],[[90000047,0,0],[90000047,1,0],[90000047,2,0]]]},{"name":"【皆伝】甘味なのに甘くない","difficulty":15,"course_type":1,"etime":0,"clear_type":2,"score":2850000,"is_hard":true,"hazard_type":0,"tune_list":[[[90000010,2,1]],[[80000101,2,1]],[[50000102,2,1]]]},{"name":"【伝導】真の青が魅せた空","difficulty":15,"course_type":1,"etime":0,"clear_type":1,"score":970000,"is_hard":true,"hazard_type":0,"tune_list":[[[50000332,2,0]],[[70000098,2,0]],[[90001005,2,1]]]},{"name":"豪華絢爛高揚絶頂","difficulty":16,"course_type":1,"etime":0,"clear_type":2,"score":2960000,"is_hard":true,"hazard_type":0,"tune_list":[[[10000065,2,1]],[[50000323,2,1]],[[50000208,2,1]]]},{"name":"絢爛豪華激情無常","difficulty":16,"course_type":1,"etime":0,"clear_type":2,"score":2960000,"is_hard":true,"hazard_type":0,"tune_list":[[[60000010,2,1]],[[70000110,2,1]],[[90000047,2,1]]]},{"name":"【指神】王の降臨","difficulty":16,"course_type":1,"etime":0,"clear_type":2,"score":2980000,"is_hard":true,"hazard_type":0,"tune_list":[[[70000094,2,1]],[[80000088,2,1]],[[70000110,2,1]]]},{"name":"【伝導】1116全てを超越した日","difficulty":16,"course_type":1,"etime":0,"clear_type":2,"score":2975000,"is_hard":true,"hazard_type":0,"tune_list":[[[50000208,2,0]],[[80000050,2,0]],[[90000057,2,1]]]},{"name":"My Top9 Fav Songs","difficulty":7,"course_type":1,"etime":0,"clear_type":2,"score":2700000,"is_hard":false,"hazard_type":0,"tune_list":[[[50000049,2,1],[50000101,2,1],[80000136,2,1]],[[80000084,2,1],[50000071,2,1],[50000084,2,1]],[[60000009,2,1],[50000024,2,1],[90000173,2,1]]]}]'
// no BEMANI MASTER KOREA 2019, 2021
export const FestoCourse = JSON.parse(raw_course);
