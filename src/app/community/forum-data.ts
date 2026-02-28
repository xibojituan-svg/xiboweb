export interface Post {
    id: string;
    title: string;
    excerpt: string;
    content: string;
    author: string;
    authorAvatar: string;
    category: string;
    categoryLabel: string;
    tags: string[];
    date: string;
    views: number;
    likes: number;
    comments: number;
    isHot?: boolean;
    isNew?: boolean;
}

export const forumCategories = [
    { id: "all", label: "全部" },
    { id: "voice", label: "有声演播" },
    { id: "video", label: "短视频创作" },
    { id: "ai", label: "AI创作" },
    { id: "income", label: "变现心得" },
];

// 最新论坛帖子（与数据库同步，最新在前）
export const forumPosts: Post[] = [
    {
        id: "3",
        title: "用AI工具3个月，我的小红书账号从0涨到2万粉",
        excerpt: "从零开始学AI内容创作，3个月小红书涨粉2.1万，月收入6000+，接到5个品牌合作。",
        content: `
      <p>刚开始学AI内容创作的时候，我甚至不知道提示词是什么。朋友推荐我报了喜播的AI内容课，才意识到原来AI工具用好了，可以让内容产出效率提升5倍不止。</p>
      <p>课程里教的「STAR提示词结构法」让我豁然开朗：情境、任务、行动、结果，四步写出让AI真正理解你意图的指令。从此，我每天用Claude和豆包，一个上午就能产出8-10篇高质量内容草稿。</p>
      <p>三个月后，我的小红书美妆账号从0粉开始，现在有2.1万粉丝，接到了5个品牌合作，月收入6000+。最重要的是，我还有时间陪家人、做自己喜欢的事。</p>
      <p>如果你也想用AI改变生活节奏，欢迎来找我交流！</p>
    `,
        author: "林小雨",
        authorAvatar: "👤",
        category: "ai",
        categoryLabel: "AI创作",
        tags: ["AI工具", "小红书", "内容创作"],
        date: "2026-02-28",
        views: 0,
        likes: 0,
        comments: 0,
        isHot: true,
        isNew: true,
    },
    {
        id: "2",
        title: "从外卖骑手到喜马拉雅主播，我用声音改变了命运",
        excerpt: "三年前还在骑电动车送外卖，三个月喜播声音课后上线首部有声小说，两周播放破3万，现已全职做声音内容，月收入稳定在5000-7000。",
        content: `
      <p>三年前，我每天骑着电动车穿梭在城市里送外卖，风吹日晒，月收入不过4000元。一次偶然的机会，朋友推荐我试试喜播的声音主播课。</p>
      <p>老实说，我当时非常犹豫——我普通话不标准，声音也不够好听，哪里敢想做主播？</p>
      <p>但班主任说的一句话点醒了我：「声音变现靠的不是天赋，靠的是找对方向和坚持。」</p>
      <p>我就这样报名了。每天送完外卖回家，洗个澡，打开课程学习录音技巧。第一个月的作品我自己听着都想删掉，但老师说：方向对了，丑小鸭也能变天鹅。</p>
      <p>三个月后，我在喜马拉雅发布的第一本有声小说《逆流人生》上线，两周内播放量突破了3万。半年后，账号进粉2.1万，月收入稳定在5000-7000之间。</p>
      <p>现在我已经全职做声音内容了，不用再骑车送外卖。最感谢的，是那个在深夜鼓励自己迈出第一步的自己。</p>
    `,
        author: "陈志远",
        authorAvatar: "🎙️",
        category: "voice",
        categoryLabel: "变现心得",
        tags: ["声音变现", "有声小说", "喜马拉雅"],
        date: "2026-02-28",
        views: 0,
        likes: 0,
        comments: 0,
        isHot: true,
        isNew: true,
    },
    {
        id: "1",
        title: "零基础学员如何通过喜播学堂在3个月内拿到第一个商单？",
        excerpt: "很多小伙伴私信问我，完全没经验真的能变现吗？今天分享下我的实战心路历程，从选课到录制，再到最后接单的全套避坑指南...",
        content: `
      <p>很多小伙伴私信问我，完全没经验真的能变现吗？今天分享下我的实战心路历程，从选课到录制，再到最后接单的全套避坑指南。</p>
      <h3>第一阶段：心态建设</h3>
      <p>不要纠结声音好不好听，普通话够不够标准。老师说得对，心意和真实感最重要。</p>
      <h3>第二阶段：刻意练习</h3>
      <p>每天早起半小时跟读，录下来自己听。你会发现进步真的很快。</p>
      <h3>第三阶段：勇于试音</h3>
      <p>不要怕失败，我投了20个标才中第一个。但那100块钱的收入，比我现在的工资还让我兴奋！</p>
    `,
        author: "风中的百合",
        authorAvatar: "🌸",
        category: "voice",
        categoryLabel: "有声演播",
        tags: ["新手入门", "商单实战"],
        date: "2026-02-20",
        views: 1250,
        likes: 88,
        comments: 12,
        isHot: true,
    },
    {
        id: "4",
        title: "2026年AI短视频风口在哪？我的AIGC全能视频实战心得",
        excerpt: "利用AI工具30分钟出一个片子，播放量竟然破了10万。现在的工具已经成熟到这种地步了吗？快来看看我用的魔法助手...",
        content: `
      <p>利用AI工具30分钟出一个片子，播放量竟然破了10万。现在的工具已经成熟到这种地步了吗？</p>
      <p>我主要用到了喜播提供的AI素材库和自动化分镜工具。以前需要剪辑一整天的工作，现在喝杯咖啡的功夫就完成了。</p>
      <p>核心不在于技术，而在于你如何调教AI。好的关键词比好的显卡更重要。</p>
    `,
        author: "AI科技宅",
        authorAvatar: "🤖",
        category: "ai",
        categoryLabel: "AI创作",
        tags: ["AIGC", "短视频"],
        date: "2026-02-24",
        views: 3500,
        likes: 245,
        comments: 56,
        isNew: true,
        isHot: true,
    },
];
